/*Функция для проверки длины строки.
имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 18); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 10); // Результат: false — строка не проходит
*/

function getStringLength(string, number) {
  return string.length <= number;
}
getStringLength('проверяемая строка', 20);

/*Функция для проверки, является ли строка палиндромом.
имя_функции('топот'); // Результат: true - строка является палиндромом
имя_функции('ДовОд'); // Результат: true - несмотря на разный регистр, тоже палиндром
имя_функции('Кекс');  // Результат: false - это не палиндром
имя_функции('Лёша на полке клопа нашёл '); // Результат: true - это палиндром
*/

function isPalidrome(string) {
  string = string.toLowerCase().replace(/\s/g,''); //нижний регистр, глобальный поиск пробелов и замена на пустоту.
  return string === string.split('').reverse().join(''); //массив, реверс массива, разделитель пустая строка.
}
isPalidrome('топот');

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
имя_функции('2023 год');            // Результат: число 2023
имя_функции('ECMAScript 2022');     // Результат: число 2022
имя_функции('1 кефир, 0.5 батона'); // Результат: число 105
имя_функции('а я томат');           // Результат: NaN
*/

function justNumbers(string) {
  const numsStr = string.replace(/[^0-9]/g, '');
  return parseInt(numsStr, 10);
}
justNumbers('1 кефир, 0.5 батона');


/*
Функция, которая принимает три параметра:
- исходную строку,
- минимальную длину,
- строку с добавочными символами
Возвращает исходную строку,дополненную указанными символами до заданной длины.
Символы добавляются в начало строки.
Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца.
*/

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
myPadStart('q', 4, 'we');