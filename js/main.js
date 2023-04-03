import {userEvent} from './data.js';
import {renderPictureList} from './picture.js';
import {renderFullsize} from './fullsize.js';
import {formSubmit} from './form.js';
// import {showAlert} from './util.js';
// import {getData} from './api.js';

//функция модуль списка
const data = userEvent();
renderPictureList(data);

//функция модуль детальных картинок
renderFullsize(data);

//функция отправки формы
formSubmit();
