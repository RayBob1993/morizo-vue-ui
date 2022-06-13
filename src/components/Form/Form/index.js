import { pluginFactory } from '../../../utils/plugins';
import VForm from './Form.vue';

const FormPlugin = /* #__PURE__ */ pluginFactory({
  components: {
    VForm
  }
});

export {
  FormPlugin, VForm
};
