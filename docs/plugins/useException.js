import { isDevelopment, isProduction } from '@/utils/env';
import { Exception } from '@/services/error';

export default (context, inject) => {
  /**
   * @requires Exception
   * @param {Error} error
   */
  function useException (error) {
    const { response } = error;
    const { status, data } = response || {};
    const { message } = data || {};

    const exception = new Exception(error);

    if (isDevelopment) {
      console.error(exception);

      return;
    }

    if (isProduction) {
      return context.error({
        statusCode: status,
        message,
        stack: exception
      });
    }
  };

  context.$useException = useException;
  inject('useException', useException);
};
