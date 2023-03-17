import {userEvent} from './data.js';
import {renderPictureList} from './picture.js';
import {renderFullsize} from './fullsize.js';

//функция модуль миниатюр
const data = userEvent();
renderPictureList(data);

//функция модуль больших картинок
renderFullsize(data);
