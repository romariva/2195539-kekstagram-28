import {userEvent} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');

const pictureFragment = document.createDocumentFragment();

const data = userEvent();

data.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.append(pictureElement);
});
pictureContainer.append(pictureFragment);

const renderPictureList = (data) => {};
export {renderPictureList};
