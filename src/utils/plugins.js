/**
 * Регистрация группы плагинов
 * @param {Object} Vue
 * @param {Object} plugins - Плагины
 */
export const registerPlugins = (Vue, plugins = {}) => {
  for (const plugin in plugins) {
    if (plugin && plugins[plugin]) {
      Vue.use(plugins[plugin]);
    }
  }
};

/**
 * Регистрация компонента
 * @param {Object} Vue
 * @param {String} name
 * @param {Object} def
 */
export const registerComponent = (Vue, name, def) => {
  if (Vue && name && def) {
    Vue.component(name, def);
  }
};

/**
 * Регистрация группы компонентов
 * @param {Object} Vue
 * @param {Object} components - Компоненты
 */
export const registerComponents = (Vue, components = {}) => {
  for (const component in components) {
    registerComponent(Vue, component, components[component]);
  }
};

/**
 * Plugin object factory function.
 * @param {Object} options
 * @param {Object} options.components - Компоненты
 * @param {Object} options.plugins - Плагины
 * @param {Object} extend
 * @returns {object} plugin install object
 */
export const pluginFactory = (options = {}, extend = {}) => ({
  ...extend,
  install: installFactory(options)
});

/**
 * Фабрика установки плагинов
 * @param {Object} params
 * @param {Object} params.components - Компоненты
 * @param {Object} params.plugins - Плагины
 * @returns {Function} - Фунция установки плагинов
 */
export const installFactory = ({ components, plugins } = {}) => {
  const install = Vue => {
    if (install.installed) {
      return;
    }

    install.installed = true;

    registerComponents(Vue, components);
    registerPlugins(Vue, plugins);
  };

  install.installed = false;

  return install;
};
