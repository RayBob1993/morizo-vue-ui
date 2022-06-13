/**
 * @extends Error
 */
class ServerError extends Error {
  /**
   * @param {String} message
   * @param {Object} data
   */
  constructor (message, data) {
    super(message);

    this.name = 'ServerError';
    this.data = data;
  }
}

export default ServerError;
