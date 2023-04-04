const body = document.body;
const modalOk = document.querySelector('#success').content.querySelector('.success');
const modalError = document.querySelector('#error').content.querySelector('.error');

//модальное окно успешной отправки
const getModalSuccess = () => {
  const element = modalOk.querySelector('div');
  const clonedElement = element.cloneNode(true);
  body.appendChild(clonedElement);
};

//модальное окно ошибка отправки
const getModalError = () => {
  const element = modalError.querySelector('div');
  const clonedElement = element.cloneNode(true);
  body.appendChild(clonedElement);
};

export {getModalSuccess, getModalError};
