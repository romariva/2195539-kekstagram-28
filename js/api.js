const BASE_URL = 'https://28.javascript.pages.academy/kekstagram';

//2 маршрута для получения данных, константы перечисления
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
//методы для отправки
const Method = {
  GET: 'GET',
  POST: 'POST',
};
//текст на случай ошибок
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте еще раз',
};

const load = (route, errortext, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}$`, {method, body})
    .then((response) => {
      if(!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(errortext);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);

const sendData = (body) =>
  load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export {getData, sendData};
