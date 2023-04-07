import {renderPictureList} from './picture.js';
import {renderFullsize} from './fullsize.js';
import {formSubmit} from './form.js';
import {showAlert, debounce} from './util.js';
import {getData} from './api.js';
import {init, getFilter} from './filter.js';
import { loadLocalFile } from './load_picture.js';

getData()
  .then((data) => {
    const debouncedRenderPictureList = debounce(renderPictureList);
    init (data, debouncedRenderPictureList);
    renderPictureList(getFilter());
    renderFullsize(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

//функция отправки формы
formSubmit();

//функция загрузки своей картинки
loadLocalFile();
