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

const createElement = (tagName, attributes = {}, text) => {
  const element = document.createElement(tagName);
  Object.assign(element, attributes);
  if (text) {
    element.appendChild(document.createTextNode(text));
  }
  return element;
};

export {getRandomArrayElement, getRandomInteger, isEscapeKey, getUniqueId, createElement};
