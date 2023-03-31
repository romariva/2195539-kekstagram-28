import {getRandomArrayElement, getRandomInteger, getUniqueId} from './util.js';

const COMMENT_COUNT = 5;

const FEEDBACKS_COUNT = 25;

const NAMES = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон',];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Мне понравилось в является поэтому сайте удобность.',
  'Профессиональность заметна не вооружённых взглядом!',
  'Стоит задача раскрутить страницу. Пока все выполняется в соответствии с поставленной задачей.',
  'Классный сервис,услуг много и социальных сетей с которыми он работает вообщем СУПЕР.',
  'Достойный сервис по продвижению социальных сетей ',
  'Прекрасный и удобный сервис. Разработчики большие молодцы. ',
];

const createComments = () => ({
  id: getUniqueId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES),
});

const createPhotoDesc = () => ({
  id: getUniqueId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  name: getRandomArrayElement(NAMES),
  url:`photos/${getRandomInteger(1, 25)}.jpg`,
  likes: getRandomInteger(15, 200),
  description: getRandomArrayElement(DESCRIPTIONS),
  comments: Array.from({ length: getRandomInteger(0, COMMENT_COUNT) }, createComments),
});

const userEvent = () => Array.from({ length: FEEDBACKS_COUNT }, createPhotoDesc);

export {userEvent};
