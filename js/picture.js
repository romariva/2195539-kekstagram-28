//функция для отрисовки изображений
const renderPictureList = (data) => {
//находим шаблон и его содержимое
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  //находим место для вставки фотографий
  const pictureContainer = document.querySelector('.pictures');

  //создаем фрагмент для вставки
  const pictureFragment = document.createDocumentFragment();

  data.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length; //используем только колличество комментов.
    pictureFragment.append(pictureElement);
  });
  pictureContainer.append(pictureFragment);
};

export {renderPictureList};
