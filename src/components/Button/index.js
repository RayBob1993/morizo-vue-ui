import { pluginFactory } from '../../utils/plugins';
import VButton from './Button.vue';

const ButtonPlugin = /* #__PURE__ */ pluginFactory({
  components: {
    VButton
  }
});

export {
  ButtonPlugin, VButton
};
