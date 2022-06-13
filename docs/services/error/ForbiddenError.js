/**
 * @extends Error
 */
class ForbiddenError extends Error {
  /**
   * @param {String} message
   * @param {Object} data
   */
  constructor (message, data) {
    super(message);

    this.name = 'ForbiddenError';
    this.data = data;
  }
}

export default ForbiddenError;
