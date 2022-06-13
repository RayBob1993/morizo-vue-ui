export * from './dom';
export * from './use';

/**
 * Является ли значение массивом
 * @param value
 * @return {Boolean}
 */
export const isArray = value => Array.isArray(value);

/**
 * Является ли значение объектом
 * @param {Object} object
 * @return {Boolean}
 */
export const isObject = object => Object.prototype.toString.call(object) === '[object Object]';

/**
 * Является ли значение числом
 * @param value
 * @return {Boolean}
 */
export const isNumber = value => !isNaN(parseFloat(value)) && isFinite(value);

/**
 * Является ли значение строкой
 * @param string
 * @return {Boolean}
 */
export const isString = string => Object.prototype.toString.call(string) === '[object String]';

/**
 * Является ли значение Boolean типа
 * @param value
 * @return {Boolean}
 */
export const isBoolean = value => {
  return value === true || value === false || value === 'false' || value === 'true';
};

/**
 * @param {Object} object
 * @param {String} key
 * @return {Boolean}
 */
export const hasOwn = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

/**
 * @requires isString
 * @param {String} string
 * @return {String} Вернёт очищенную от пробелов строку
 */
export const trimText = string => {
  if (!isString(string)) {
    return '';
  }

  return string.trim();
};

/**
 * @requires trimText
 * @requires isString
 * @param {String} string
 * @return {String} Вернёт очищенную от html тегов строку
 */
export const stripHTMLTags = string => {
  if (!isString(string)) {
    return '';
  }

  return trimText(string).replace(/(<([^>]+)>)/gi, '');
};
