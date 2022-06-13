import ForbiddenError from './ForbiddenError';
import NotFoundError from './NotFoundError';
import ServerError from './ServerError';
import UnauthorizedError from './UnauthorizedError';
import ValidationError from './ValidationError';
import UnhandledError from './UnhandledError';

class Exception {
  constructor (error = {}) {
    const { response } = error;
    const { status, data } = response || {};
    const { message } = data || {};

    switch (status) {
      case 401:
        return new UnauthorizedError(message, data);

      case 403:
        return new ForbiddenError(message, data);

      case 404:
        return new NotFoundError(message, data);

      case 422:
        return new ValidationError(message, data);

      case 500:
        return new ServerError(message, data);

      default:
        return new UnhandledError(message, data);
    }
  }
}

export default Exception;
