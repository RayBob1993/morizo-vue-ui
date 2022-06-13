/**
 * Создаёт новое окно
 * @param {String} url
 * @param {Object} options
 * @param {Number} options.width
 * @param {Number} options.height
 * @param {Boolean} options.scrollbar
 * @return {Window} Новое браузерное окно
 * @function
 */
export const useWindowPopup = (url, options = {}) => {
  if (!url) {
    return;
  }

  const width = parseInt(options.width) || 385;
  const height = parseInt(options.height) || 570;
  const scrollbar = options.scrollbar ? 'yes' : 'no';

  const dualScreenLeft = window.screenX;
  const dualScreenTop = window.screenY;

  const windowWidth = screen.width;
  const windowHeight = screen.height;

  const systemZoom = windowWidth / window.screen.availWidth;
  const left = (windowWidth - width) / 2 / systemZoom + dualScreenLeft;
  const top = (windowHeight - height) / 2 / systemZoom + dualScreenTop;

  return window.open(
    url,
    '_blank',
    `
    scrollbars=${scrollbar},
    width=${width / systemZoom}, 
    height=${height / systemZoom}, 
    top=${top}, 
    left=${left}
    `
  );
};
