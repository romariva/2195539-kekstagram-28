import {userEvent} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = userEvent();

const pictureFragment = document.createDocumentFragment();

pictureContainer.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').textContent = url;
  pictureElement.querySelector('.picture__comments').textContent = likes;
  pictureElement.querySelector('.picture__likes').textContent = comments;
  pictureFragment.append(pictureElement);
});

pictureContainer.append(pictureFragment);

export {pictureContainer};
