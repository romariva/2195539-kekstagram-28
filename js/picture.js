import {userEvent} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const data = userEvent();
const pictureContainer = document.querySelector('.pictures');

const pictureFragment = document.createDocumentFragment();

data.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.append(pictureElement);
});

pictureContainer.append(pictureFragment);

export {pictureContainer};
