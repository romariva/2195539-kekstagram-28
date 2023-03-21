const renderComments = (data) => {
  const commentList = document.createElement('ul');

  data.forEach(({avatar, name, message}) => {
    const commentItem = document.createElement('li');
    commentItem.querySelector('.social__picture').src = avatar;
    commentItem.querySelector('.social__picture').alt = name;
    commentItem.querySelector('.social__text').textContent = message;

    commentList.append(commentItem);
  });
  pictureComments.append(commentList);
};

export {renderComments};
