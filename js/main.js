import {userEvent} from './data.js';
import {renderPictureList} from './picture.js';
import {renderFullsize} from './fullsize.js';
import { renderComments } from './comments.js';

//функция модуль списка
const data = userEvent();
renderPictureList(data);

//функция модуль детальных картинок
renderFullsize(data);
