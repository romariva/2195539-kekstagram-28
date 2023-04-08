import {isEscapeKey} from './util.js';

const body = document.body;
const modalSuccess = document.querySelector('#success').content.querySelector('.success');
const modalError = document.querySelector('#error').content.querySelector('.error');

const successButton = modalSuccess.querySelector('.success__button');
const errorButton = modalError.querySelector('.error__button');

//модальное окно успешной отправки
const getModalSuccess = () => {
  body.appendChild(modalSuccess);
};

//закрытие succsess
modalSuccess.addEventListener('click', (evt) => {
  if (evt.target === modalSuccess || evt.target === successButton){
    body.removeChild(modalSuccess);
  }
});

// //закрыть при ESC
const onDocumentKeydown2 = document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.removeChild(modalSuccess);
    body.removeChild(modalError);
    //отписаться от события
    document.removeEventListener('keydown', onDocumentKeydown2);
  }
});


//закрытие error
modalError.addEventListener('click', (evt) => {
  if (evt.target === modalError || evt.target === errorButton){
    body.removeChild(modalError);
  }
});

//модальное окно ошибка отправки
const getModalError = () => {
  body.appendChild(modalError);
  modalSuccess.addEventListener('click', getModalError);
};

export {getModalSuccess, getModalError};