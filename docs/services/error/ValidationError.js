/**
 * @extends Error
 */
class ValidationError extends Error {
  /**
   * @param {String} message
   * @param {Object} data
   */
  constructor (message, data) {
    super(message);

    this.name = 'ValidationError';
    this.data = data;
  }
}

export default ValidationError;
