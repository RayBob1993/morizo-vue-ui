/**
 * Является ли элемент html элементом
 * @param {HTMLElement} element - DOM элемент
 * @return {Boolean}
 */
export const isElement = element => !!(element && element.nodeType === Node.ELEMENT_NODE);

/**
 * Создать html элемент
 * @param {HTMLElementTagNameMap} tagName - Название HTML тега
 * @return {HTMLElement}
 */
export const createElement = tagName => document.createElement(tagName);

/**
 * Удалить html элемент
 * @param {HTMLElement} element - DOM элемент
 */
export const removeElement = element => element && element.remove();

/**
 * Повесить обработчик события
 * @param {HTMLElement} element - DOM элемент
 * @param {String} eventName - Название события
 * @param {Function} callback - Функция обработчик
 */
export const addListener = (element, eventName, callback) => {
  element && element.addEventListener(eventName, callback);
};

/**
 * Удалить обработчик события
 * @param {HTMLElement} element - DOM элемент
 * @param {String} eventName - Название события
 * @param {Function} callback - Функция обработчик
 */
export const removeListener = (element, eventName, callback) => {
  element && element.removeEventListener(eventName, callback);
};

/**
 * Добавить класс
 * @param {HTMLElement} element - DOM элемент
 * @param {String} className - Название события
 */
export const addClass = (element, className) => {
  if (className && isElement(element) && element.classList) {
    element.classList.add(className);
  }
};

/**
 * Удалить класс
 * @param {HTMLElement} element - DOM элемент
 * @param {String} className - Название события
 */
export const removeClass = (element, className) => {
  if (className && isElement(element) && element.classList) {
    element.classList.remove(className);
  }
};

/**
 * Получить текущую ширину скроллбара
 * @requires createElement
 * @requires removeElement
 * @return {Number}
 */

export const getScrollbarWidth = () => {
  if (process.server) {
    return 0;
  }

  const outer = createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.append(outer);

  const widthNoScroll = outer.offsetWidth;

  outer.style.overflow = 'scroll';

  const inner = createElement('div');

  inner.style.width = '100%';

  outer.append(inner);

  const widthWithScroll = inner.offsetWidth;

  removeElement(outer);

  return widthNoScroll - widthWithScroll;
};
