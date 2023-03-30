import {renderComments} from './comments.js';

const VISIBLE_COMMENTS = 5;
let shownComments = 0;
let comments = [];

const commentLoader = document.querySelector('.comments-loader');
const commentsList = document.querySelector('.social__comments');
const pictureCommentsCount = document.querySelector('.comments-count');

const renderNewComments = () => {
  shownComments += VISIBLE_COMMENTS;
  if (shownComments >= comments.length) {
    commentLoader.classList.add('hidden');
    shownComments = comments.length;
  } else {
    commentLoader.classList.remove('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < shownComments; i++) {
    const commentElement = renderComments(comments[i]);
    fragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  pictureCommentsCount.innerHTML = `${shownComments} из <span class="comments-count">${comments.length}</span> комментариев`;
};

export {renderNewComments};
