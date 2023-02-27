/*
Напишите необходимые функции для создания массива из 25 сгенерированных объектов.
Каждый объект массива — описание фотографии, опубликованной пользователем.
*/
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhotoDesc = () => ({
  id: getRandomInteger(1, 25),
  message: getRandomArrayElement(COMMENTS),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  name: getRandomArrayElement(NAMES),
  url:`photos/${getRandomInteger(1, 25)}.jpg`,
  likes: getRandomInteger(15, 200),
  description: 'строка — описание фотографии.',
});

function createTotal () {
  // eslint-disable-next-line no-return-assign, no-undef
  return userEvent = Array.from({length: 25}, createPhotoDesc);
}

createTotal();
