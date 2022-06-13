import { UPDATE_MODEL_EVENT } from '../../constants/event-names';
import { NAME_FORM, NAME_FORM_ITEM, NAME_RADIO_GROUP } from '../../constants/components';
import { PROP_TYPE_ANY, PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_STRING } from '../../constants/prop-types';

export default {
  inject: {
    [NAME_FORM]: {
      default: null
    },
    [NAME_FORM_ITEM]: {
      default: null
    },
    [NAME_RADIO_GROUP]: {
      default: null
    }
  },
  inheritAttrs: false,
  props: {
    value: {
      type: PROP_TYPE_ANY,
      default: ''
    },
    modelValue: {
      type: PROP_TYPE_ANY,
      default: ''
    },
    label: {
      type: [
        PROP_TYPE_STRING,
        PROP_TYPE_NUMBER
      ]
    },
    disabled: {
      type: PROP_TYPE_BOOLEAN,
      default: false
    }
  },
  computed: {
    model: {
      get () {
        return this[NAME_RADIO_GROUP]
          ? this[NAME_RADIO_GROUP].value
          : this.value;
      },
      set (value) {
        if (this[NAME_RADIO_GROUP]) {
          this[NAME_RADIO_GROUP].onChange(value);
        } else {
          this.$emit(UPDATE_MODEL_EVENT, value);
        }
      }
    },
    isDisabled () {
      return this[NAME_FORM]?.disabled ||
        this[NAME_FORM_ITEM]?.disabled ||
        this[NAME_RADIO_GROUP]?.disabled ||
        this.disabled;
    },
    isChecked () {
      return this.model === this.modelValue;
    }
  }
};
