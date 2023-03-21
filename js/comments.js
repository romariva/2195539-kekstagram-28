import { COMMENTS } from './data';

const renderComments = (commentString) => {
const commentString = COMMENTS;

  const commentList = document.createElement('ul');

  commentString.forEach((comments) => {
    const commentItem = document.createElement('li');
    commentItem.textContent = comments;
    commentList.append(commentItem);
  });

};

export {renderComments};
