/**
 * @typedef {Object} UserData
 * @property {?string} fio - ФИО из переданного параметра
 * @property {?string} date - дата из переданного параметра
 * @property {Boolean} error - true, если не хватает данных для остальных полей объекта
 */

/**
 * @description
 * Функция для поиска и взятия даты и фио из переданной строки.
 * Также валидирует строку на наличие данных аттрибутов
 * @param {string} inputData
 * @returns {UserData} 
 */
export default function getCutedUserData (inputData) {
  const RegExp_DATE = /\d{2}.\d{2}.\d{4}/;
  const RegExp_FIO = /[а-яА-Я]+ [а-яА-Я]+ [а-яА-Я]+/;

  const CUTED_DATE = inputData.match(RegExp_DATE);
  const CUTED_FIO = inputData.match(RegExp_FIO);

  return {
    fio: !!CUTED_DATE ? CUTED_DATE[0] : null,
    date: !!CUTED_FIO ? CUTED_FIO[0] : null,
    error: !CUTED_DATE || !CUTED_FIO
  }
}