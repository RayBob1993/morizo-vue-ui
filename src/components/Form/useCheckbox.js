import { UPDATE_MODEL_EVENT } from '../../constants/event-names';
import { PROP_TYPE_ANY, PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING } from '../../constants/prop-types';
import { NAME_CHECKBOX_GROUP, NAME_FORM, NAME_FORM_ITEM } from '../../constants/components';

export default {
  inject: {
    [NAME_FORM]: {
      default: null
    },
    [NAME_FORM_ITEM]: {
      default: null
    },
    [NAME_CHECKBOX_GROUP]: {
      default: null
    }
  },
  inheritAttrs: false,
  props: {
    value: {
      type: PROP_TYPE_ANY,
      default: false
    },
    modelValue: {
      type: PROP_TYPE_ANY,
      default: ''
    },
    label: {
      type: [
        PROP_TYPE_STRING,
        PROP_TYPE_NUMBER
      ],
      default: ''
    },
    disabled: {
      type: PROP_TYPE_BOOLEAN,
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this[NAME_CHECKBOX_GROUP]
          ? this[NAME_CHECKBOX_GROUP].value
          : this.value;
      },
      set (value) {
        if (this[NAME_CHECKBOX_GROUP]) {
          this[NAME_CHECKBOX_GROUP].onChange(value);
        } else {
          this.$emit(UPDATE_MODEL_EVENT, value);
        }
      }
    },
    isDisabled () {
      return this[NAME_FORM]?.disabled ||
        this[NAME_FORM_ITEM]?.disabled ||
        this[NAME_CHECKBOX_GROUP]?.disabled ||
        this.disabled;
    },
    isChecked () {
      if (this[NAME_CHECKBOX_GROUP]) {
        return this.model.includes(this.modelValue);
      } else if (this.modelValue) {
        return this.model === this.modelValue;
      } else {
        return this.model;
      }
    }
  }
};
