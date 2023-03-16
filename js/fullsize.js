import {isEscapeKey} from './util.js';
import './picture.js';

const body = document.querySelector('body');
const bigPictureSection = document.querySelector('.big-picture');
const bigPicturePreview = document.querySelector('.big-picture__preview');

const closeSection = document.querySelector('.overlay');
const closeButton = document.querySelector('.big-picture__cancel');
const pictureContainer = document.querySelector('.pictures');
const commentCounter = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

// const pictureLike = document.querySelector('.likes-count');
// const pictureComments = document.querySelector('.comments-count');
// const pictureDesc = document.querySelector('.social__caption');

//открыть при клике
pictureContainer.addEventListener('click', (evt) => {
  evt.preventDefault();
  const currentLink = evt.target.closest('[data-picture-id]');

  if (currentLink){
    bigPictureSection.classList.remove('hidden');
    commentCounter.classList.add('hidden');
    commentLoader.classList.add('hidden');

    bigPicturePreview.querySelector('.big-picture__img img').src = evt.target.src;
    bigPicturePreview.querySelector('.likes-count span').textContent = evt.target.textContent;

  }
  body.classList.add('.modal-open');
  console.log(currentLink.dataset.pictureId);
});

//закрыть при ESC
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureSection.classList.add('hidden');
    commentCounter.classList.remove('hidden');
    commentLoader.classList.remove('hidden');
    body.classList.remove('.modal-open');
  }
});

//закрыть кнопкой Крестик
closeButton.addEventListener('click', () => {
  closeSection.classList.add('hidden');
});
