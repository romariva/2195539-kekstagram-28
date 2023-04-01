const TAG_ERROR_TEXT = 'Неправильно заполнено поле';
const COMMENT_ERROR_TEXT_MAXLENGTH = 'Длина комментария не может составлять больше 140 символов';
const COMMENT_ERROR_TEXT_MINLENGTH = 'Длина комментария не может составлять меньше 5 символов';
const MAX_TEXT_HASHTAGS = 5;
const MAX_TEXT_COMMENTS = 140;
const MIN_TEXT_COMMENTS = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;


const uploadFileField = document.querySelector('#upload-file');
const body = document.querySelector('body');
const modalShow = document.querySelector('.img-upload__overlay');

const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const closeModalWindowButton = document.querySelector('.img-upload__cancel');

const form = document.querySelector('.img-upload__form');

//объявление Pristine
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextClass:'img-upload__field-wrapper--error',
});

//открывает модальное окно + блокирует скролл + добавляет обработчик событий
const openModalWindow = () => {
  modalShow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentEscapeKeydown);
};

//закрывает модальное окно + удаляет обработчик событий
const closeModalWindow = () => {
  modalShow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
};

//закрывает  при нажатии Escape условии, что поля хэш и текстареа не в фокусе
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
