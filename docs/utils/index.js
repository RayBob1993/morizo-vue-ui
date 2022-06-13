/**
 * @param {Object} object
 * @param {String} key
 * @return {Boolean}
 */
function hasOwn (object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

export {
  hasOwn
};
