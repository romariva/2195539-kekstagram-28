import {renderPictures} from './picture.js';
import {renderFullsize} from './fullsize.js';
import {formSubmit} from './form.js';
import {showAlert, debounce} from './util.js';
import {getData} from './api.js';
import {init, getFilter} from './filter.js';
import {loadLocalFile} from './load-picture.js';

//получение данных с сервера
getData()
  .then((data) => {
    const debouncedRenderPictureList = debounce(renderPictures);
    init (data, debouncedRenderPictureList);
    renderPictures(getFilter());
    renderFullsize(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

//отправка формы
formSubmit();

//загрузка своей картинки
loadLocalFile();
