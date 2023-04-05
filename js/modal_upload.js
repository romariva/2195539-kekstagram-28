import {isEscapeKey} from './util.js';

const body = document.body;
const modalSuccess = document.querySelector('#success').content.querySelector('.success');
const modalError = document.querySelector('#error').content.querySelector('.error');

const successButton = document.querySelector('.success__button');
const errorButton = document.querySelector('.error__button');

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

//закрыть при ESC
const onDocumentKeydown = document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.removeChild(modalSuccess);
    //отписаться от события
    document.removeEventListener('keydown', onDocumentKeydown);
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
