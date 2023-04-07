import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';
import {showAlert} from './util.js';
import {sendData} from './api.js';
import {getModalSuccess, getModalError} from './modal_upload.js';

const TAG_ERROR_TEXT = 'Неправильно заполнено поле';
const COMMENT_ERROR_TEXT_MAXLENGTH = 'Длина комментария не может составлять больше 140 символов';
const MAX_TEXT_HASHTAGS = 5;
const MAX_TEXT_COMMENTS = 140;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

//сообщения при отправки формы
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

const submitButton = document.querySelector('#upload-submit');

const uploadFileField = document.querySelector('#upload-file');
const body = document.body;
const modalShow = document.querySelector('.img-upload__overlay');


const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const closeModalWindowButton = document.querySelector('.img-upload__cancel');

const form = document.querySelector('.img-upload__form');

//объявление библиотеки Pristine
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper--error',
});

//валидация хэштэгов

//функция проверяет тэг регулярным выражением
const hasValidTag = (tag) => VALID_SYMBOLS.test(tag);

//функция для проверки колличества
const hasValidCount = (tags) => tags.length <= MAX_TEXT_HASHTAGS;

//проверка на уникальность хэштегов
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag)=>tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(hasValidTag);
};

pristine.addValidator(
  hashtagsField,
  validateTags,
  TAG_ERROR_TEXT
);

//валидация комментариев

//проверка максимальной длины комментария
const validateCommentMax = (value) => value.length <= MAX_TEXT_COMMENTS;

pristine.addValidator(
  commentField,
  validateCommentMax,
  COMMENT_ERROR_TEXT_MAXLENGTH
);

//открывает модальное окно + блокирует скролл + добавляет обработчик событий
const openModalWindow = () => {
  modalShow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
};

//закрывает модальное окно + удаляет обработчик событий, сброс значений формы
const closeModalWindow = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  modalShow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

//закрытие на overlay
modalShow.addEventListener('click', (evt) => {
  if (evt.target === modalShow){
    evt.currentTarget.classList.add('hidden');
  }
});

//закрывает при нажатии Escape условии, что поля хэш и текстареа не в фокусе
function onDocumentEscapeKeydown (evt) {
  if (evt.key === 'Escape' && !(document.activeElement === hashtagsField || document.activeElement === commentField)) {
    evt.preventDefault();
    closeModalWindow();
  }
}

//обработчик события -  закрытие кнопке крестик
closeModalWindowButton.addEventListener('click', closeModalWindow);

//при изменении файла сработает  обработчик
uploadFileField.addEventListener('change', () => openModalWindow());

// блокировка кнопки во время отправки формы
const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

// отправка формы с валидацией Prestine + sendData
const formSubmit = (onSuccess) => {
  form.addEventListener('submit',(evt) => {
    evt.preventDefault();
    if (pristine.validate()) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .then(getModalSuccess)
        .then(closeModalWindow)
        .catch((err) => {
          showAlert(err.message);
          getModalError();
        })
        .finally(unblockSubmitButton);
    }
  });
};

export {formSubmit, closeModalWindow};
