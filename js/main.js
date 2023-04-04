import {renderPictureList} from './picture.js';
import {renderFullsize} from './fullsize.js';
import {formSubmit} from './form.js';
import {showAlert} from './util.js';
import {getData} from './api.js';

getData()
  .then((data) => {
    renderFullsize(data);
    renderPictureList(data);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

//функция отправки формы
formSubmit();
