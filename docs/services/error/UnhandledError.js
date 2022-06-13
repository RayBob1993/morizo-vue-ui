/**
 * @extends Error
 */
class UnhandledError extends Error {
  /**
   * @param {String} message
   * @param {Object} data
   */
  constructor (message, data) {
    super(message);

    this.name = 'UnhandledError';
    this.data = data;
  }
}

export default UnhandledError;
