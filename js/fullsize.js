import {isEscapeKey} from './util.js';

const renderFullsize = (data) => {

  const body = document.querySelector('body');
  const bigPictureSection = document.querySelector('.big-picture');

  const closeSection = document.querySelector('.overlay');
  const closeButton = document.querySelector('.big-picture__cancel');
  const pictureContainer = document.querySelector('.pictures');
  const commentCounter = document.querySelector('.social__comment-count');
  const commentLoader = document.querySelector('.comments-loader');

  const pictureLikeCount = document.querySelector('.likes-count');
  const pictureCommentsCount = document.querySelector('.comments-count');
  const pictureComments = document.querySelector('.social__comments');
  const pictureDesc = document.querySelector('.social__caption');
  const pictureImg = document.querySelector('.big-picture__img img');

  pictureContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const currentLink = evt.target.closest('[data-picture-id]');

    if (currentLink){
      const currentItem = data.find((item) => item.id === currentLink.dataset.pictureId);
      pictureImg.src = currentItem.url;
      pictureImg.alt = currentItem.description;
      pictureLikeCount.textContent = currentItem.likes;
      pictureCommentsCount.textContent = currentItem.comments.length;
      pictureDesc.toString = currentItem.description;


      bigPictureSection.classList.remove('hidden');
      commentCounter.classList.add('hidden');
      commentLoader.classList.add('hidden');
    }

    body.classList.add('.modal-open');
  });

  //закрыть при ESC
  const onDocumentKeydown = document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPictureSection.classList.add('hidden');
      commentCounter.classList.remove('hidden');
      commentLoader.classList.remove('hidden');
      body.classList.remove('.modal-open');

      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });

  //закрыть кнопкой Крестик
  closeButton.addEventListener('click', () => {
    bigPictureSection.classList.add('hidden');
  });
  //закрытие на overlay
  closeSection.addEventListener('click', () => {
    closeSection.classList.add('hidden');
  });

};

export {renderFullsize};
