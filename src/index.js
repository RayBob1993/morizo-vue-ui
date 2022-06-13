import { installFactory } from './utils/plugins';
import { componentsPlugin } from './components';

const NAME = 'MorizoVueUI';

const install = /* #__PURE__ */ installFactory({
  plugins: {
    componentsPlugin
  }
});

const MorizoVueUI = /* #__PURE__ */ {
  install,
  NAME
};

export {
  FormPlugin, VForm
} from './components/Form/Form';
export {
  FormItemPlugin, VFormItem
} from './components/Form/FormItem';
export {
  InputPlugin, VInput
} from './components/Form/Input';
export {
  RadioPlugin, VRadio
} from './components/Form/Radio';
export {
  RadioButtonPlugin, VRadioButton
} from './components/Form/RadioButton';
export {
  RadioGroupPlugin, VRadioGroup
} from './components/Form/RadioGroup';
export {
  CheckboxPlugin, VCheckbox
} from './components/Form/Checkbox';
export {
  CheckboxButtonPlugin, VCheckboxButton
} from './components/Form/CheckboxButton';
export {
  CheckboxGroupPlugin, VCheckboxGroup
} from './components/Form/CheckboxGroup';
export {
  ButtonPlugin, VButton
} from './components/Button';

export default MorizoVueUI;
