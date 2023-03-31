import {isEscapeKey} from './util.js';
import {renderComments} from './comments.js';
import {renderNewComments} from './newcomments.js';

const renderFullsize = (data) => {
  const body = document.querySelector('body');
  const bigPictureSection = document.querySelector('.big-picture');
  const pictureContainer = document.querySelector('.pictures');
  const closeButton = document.querySelector('.big-picture__cancel');
  const pictureImg = document.querySelector('.big-picture__img img');
  const closeSection = document.querySelector('.overlay');

  const pictureLikeCount = document.querySelector('.likes-count');
  const pictureCommentsCount = document.querySelector('.comments-count');
  const pictureDesc = document.querySelector('.social__caption');
  const commentLoader = document.querySelector('.comments-loader');

  pictureContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const currentLink = evt.target.closest('[data-picture-id]');
    if (currentLink){
      const currentItem = data.find((item) => item.id === currentLink.dataset.pictureId);
      pictureImg.src = currentItem.url;
      pictureImg.alt = currentItem.description;
      pictureLikeCount.textContent = currentItem.likes;
      pictureCommentsCount.textContent = currentItem.comments.length;
      pictureDesc.textContent = currentItem.description;

      renderComments(currentItem.comments);

      bigPictureSection.classList.remove('hidden');
    }
    body.classList.add('.modal-open');
    commentLoader.addEventListener('click', renderNewComments);
  });

  //закрыть при ESC
  const onDocumentKeydown = document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureSection.classList.add('hidden');
      body.classList.remove('.modal-open');
      //отписаться от события
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });

  //закрыть кнопкой Крестик
  closeButton.addEventListener('click', () => {
    bigPictureSection.classList.add('hidden');
  });
  //закрытие на overlay
  closeSection.addEventListener('click', (evt) => {
    if (evt.target === closeSection){
      evt.currentTarget.classList.add('hidden');
    }
  });
};

export {renderFullsize};
