const body = document.body;
const modalSuccess = document.querySelector('#success').content.querySelector('.success');
const modalError = document.querySelector('#error').content.querySelector('.error');

//модальное окно успешной отправки
const getModalSuccess = () => {
  body.appendChild(modalSuccess);
};

//модальное окно ошибка отправки
const getModalError = () => {
  body.appendChild(modalError);
};

export {getModalSuccess, getModalError};
