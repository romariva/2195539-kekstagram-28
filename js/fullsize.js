import {isEscapeKey} from './util.js';
import {renderComments} from './comments.js';

const renderFullsize = (data) => {
  const body = document.body;
  const bigPictureSection = document.querySelector('.big-picture');
  const pictureContainer = document.querySelector('.pictures');
  const closeButton = document.querySelector('.big-picture__cancel');
  const pictureImg = document.querySelector('.big-picture__img img');

  const pictureLikeCount = document.querySelector('.likes-count');
  const pictureCommentsCount = document.querySelector('.comments-count');
  const pictureDesc = document.querySelector('.social__caption');
  const commentLoader = document.querySelector('.comments-loader');
  const commentList = document.querySelector('.social__comments');
  const commentsCount = document.querySelector('.social__comment-count');

  pictureContainer.addEventListener('click', (evt) => {
    const currentLink = evt.target.closest('[data-picture-id]');
    if (currentLink){
      const currentItem = data.find((item) => item.id.toString() === currentLink.dataset.pictureId);
      pictureImg.src = currentItem.url;
      pictureImg.alt = currentItem.description;
      pictureLikeCount.textContent = currentItem.likes;
      pictureCommentsCount.textContent = currentItem.comments.length;
      pictureDesc.textContent = currentItem.description;

      renderComments(currentItem.comments.slice(0, 5));

      commentLoader.addEventListener('click', () => {
        renderComments(currentItem.comments);
        commentsCount.textContent = `${commentList.children.length - commentList.querySelectorAll('.hidden').length} из ${commentList.children.length} комментариев`;
      });

      evt.preventDefault();
      bigPictureSection.classList.remove('hidden');
    }
    body.classList.add('.modal-open');
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
};

export {renderFullsize};
