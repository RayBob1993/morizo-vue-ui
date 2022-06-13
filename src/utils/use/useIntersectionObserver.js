/**
 * @param {Object} options
 * @param {HTMLElement} options.el
 * @param {Document|null} options.root
 * @param {String} options.rootMargin
 * @param {Array<Number>|Number} options.threshold
 * @param {Function} callback
 * @function
 */
export const useIntersectionObserver = (options = {}, callback) => {
  if (typeof IntersectionObserver === 'undefined') {
    return null;
  }

  const observer = new IntersectionObserver(entries => {
    if (!entries.length) {
      return;
    }

    const entry = entries[0];
    const isIntersecting = entry.isIntersecting;

    if (isIntersecting) {
      if (callback) {
        callback();
      }

      observer.unobserve(options.el);
      observer.disconnect();
    }
  }, options);

  observer.observe(options.el);

  return observer;
};
