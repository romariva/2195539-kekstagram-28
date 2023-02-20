/*Функция для проверки длины строки.
имя_функции('проверяемая строка', 20); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 18); // Результат: true - строка проходит по длине
имя_функции('проверяемая строка', 10); // Результат: false — строка не проходит
*/

function getStringLength (string, number) {
  return string.length <= number;
}
getStringLength('проверяемая строка', 20);

/*Функция для проверки, является ли строка палиндромом.
имя_функции('топот'); // Результат: true - строка является палиндромом
имя_функции('ДовОд'); // Результат: true - несмотря на разный регистр, тоже палиндром
имя_функции('Кекс');  // Результат: false - это не палиндром
имя_функции('Лёша на полке клопа нашёл '); // Результат: true - это палиндром
*/

function isPalindrome(string) {
  let temp = ''; //строка, копия входной строки, но без пробелов
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' '){
      temp += string[i].toLowerCase(); //если не пробел, то копируем в temp. Заодно преобразуем с строчную
    }
    let temp2 = ''; //перевернутая строка
    for (let j = 0; j < temp.length; j++) {
      temp2 += temp[temp.length - 1 - i];
    }
    if (temp2 === temp){
      return true;
    }
    return false;
  }
}
isPalindrome('Лёша на полке клопа нашёл ');

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
