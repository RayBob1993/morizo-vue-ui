import { pluginFactory } from '../utils/plugins';

// Form
import { FormPlugin } from './Form/Form';
import { FormItemPlugin } from './Form/FormItem';
import { InputPlugin } from './Form/Input';
import { RadioPlugin } from './Form/Radio';
import { RadioButtonPlugin } from './Form/RadioButton';
import { RadioGroupPlugin } from './Form/RadioGroup';
import { CheckboxPlugin } from './Form/Checkbox';
import { CheckboxButtonPlugin } from './Form/CheckboxButton';
import { CheckboxGroupPlugin } from './Form/CheckboxGroup';

// Button
import { ButtonPlugin } from './Button';

export const componentsPlugin = /* #__PURE__ */ pluginFactory({
  plugins: {
    FormPlugin,
    FormItemPlugin,
    InputPlugin,
    RadioPlugin,
    RadioButtonPlugin,
    RadioGroupPlugin,
    CheckboxPlugin,
    CheckboxButtonPlugin,
    CheckboxGroupPlugin,
    ButtonPlugin
  }
});
