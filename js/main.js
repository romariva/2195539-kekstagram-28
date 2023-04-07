import {renderPictureList} from './picture.js';
import {renderFullsize} from './fullsize.js';
import {formSubmit} from './form.js';
import {showAlert, debounce} from './util.js';
import {getData} from './api.js';
import {init, getFilter} from './filter.js';

getData()
  .then((data) => {
    const debouncedrenderFullsize = debounce(renderFullsize);
    init (data, debouncedrenderFullsize);
    renderFullsize(getFilter());
    const debouncedrenderPictureList = debounce(renderPictureList);
    init (data, debouncedrenderPictureList);
    renderPictureList(getFilter());
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

//функция отправки формы
formSubmit();
