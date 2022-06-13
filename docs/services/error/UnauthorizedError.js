/**
 * @extends Error
 */
class UnauthorizedError extends Error {
  /**
   * @param {String} message
   * @param {Object} data
   */
  constructor (message, data) {
    super(message);

    this.name = 'UnauthorizedError';
    this.data = data;
  }
}

export default UnauthorizedError;
