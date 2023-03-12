import {getRandomArrayElement, getRandomInteger} from './util.js';

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

const FEEDBACKS_COUNT = 25;

const createPhotoDesc = () => ({
  id: getRandomInteger(1, 25),
  comments: COMMENTS,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  name: getRandomArrayElement(NAMES),
  url:`photos/${getRandomInteger(1, 25)}.jpg`,
  likes: getRandomInteger(15, 200),
  description: 'строка — описание фотографии.',
});

const userEvent = () => Array.from({ length: FEEDBACKS_COUNT }, createPhotoDesc);

export {userEvent};
