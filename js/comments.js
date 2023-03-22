const renderComment = ({avatar, name, message}) => {
  const comment = document.createElement('li',{className: 'social__comment'});
  const img = document.createElement(
    'img',
    {
      className: 'social__picture',
      src: avatar,
      alt: name,
      width: 35,
      height: 35,
    });
  const text = document.createElement('p',
    {
      className: 'social__text',
      textContent: message,
    });
  comment.append(img, text);
  return comment;
};

const renderComments = (data) => {
  const comments = document.createElement('ul');
  return data.forEach((item) => {
    const comment = renderComment(item);
    comments.append(comment);
  });
};

export {renderComments};
