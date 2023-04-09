const ALERT_SHOW_TIME = 7000;

//окно ошибки сверху экрана
const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.zIndex = '100';
  alert.style.position = 'absolute';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

// Получаем рандомное число в заданном диапазоне
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получаем рандомный элемент массива от первого элемента до последнего
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//функция уникального ID
const getUniqueId = () => getRandomInteger(0, 100).toString() + new Date().getTime().toString();

// функция нажатия Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

//функция для генерации элемента DOM
const createElement = (tagName, attributes = {}, text) => {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const getCommentsCounter = () => {
  let counter = 1;

  return (showComments, commentsLength) => {
    const currentNumber = counter++;
    return showComments * currentNumber < commentsLength ? showComments * currentNumber : commentsLength;
  };
};

export {getRandomArrayElement, getRandomInteger, isEscapeKey, getUniqueId, createElement, showAlert, debounce, getCommentsCounter};
