import {userEvent} from './data.js';
import {renderPictureList} from './picture.js';

const data = userEvent();
renderPictureList(data);
