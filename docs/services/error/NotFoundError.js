/**
 * @extends Error
 */
class NotFoundError extends Error {
  /**
   * @param {String} message
   * @param {Object} data
   */
  constructor (message, data) {
    super(message);

    this.name = 'NotFoundError';
    this.data = data;
  }
}

export default NotFoundError;
