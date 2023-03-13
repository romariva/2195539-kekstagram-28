import {userEvent} from './data.js';
import {renderPictureList} from './picture.js';
import './fullsize.js';

const data = userEvent();
renderPictureList(data);
