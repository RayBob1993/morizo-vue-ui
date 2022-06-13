<template>
  <div
    class="v-checkbox-group"
    :class="[
      `v-checkbox-group--direction-${direction}`,
      {
        'v-checkbox-group--disabled': isDisabled
      }
    ]"
    role="group"
  >
    <slot/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { UPDATE_MODEL_EVENT, EVENT_NAME_CHANGE } from '../../../constants/event-names';
  import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../../../constants/prop-types';
  import { NAME_CHECKBOX_GROUP, NAME_FORM, NAME_FORM_ITEM } from '../../../constants/components';
  import DIRECTIONS, { HORIZONTAL_DIRECTION } from '../../../constants/direction-names';

  export default Vue.extend({
    name: NAME_CHECKBOX_GROUP,
    provide () {
      return {
        [NAME_CHECKBOX_GROUP]: this
      };
    },
    inject: {
      [NAME_FORM]: {
        default: null
      },
      [NAME_FORM_ITEM]: {
        default: null
      }
    },
    props: {
      value: {
        type: PROP_TYPE_ARRAY,
        default: () => []
      },
      disabled: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      direction: {
        type: PROP_TYPE_STRING,
        default: HORIZONTAL_DIRECTION,
        validator: value => DIRECTIONS.includes(value)
      }
    },
    computed: {
      model: {
        get () {
          return this.value;
        },
        set (value) {
          this.$emit(UPDATE_MODEL_EVENT, value);
        }
      },
      isDisabled () {
        return (this[NAME_FORM] && this[NAME_FORM].disabled) ||
          (this[NAME_FORM_ITEM] && this[NAME_FORM_ITEM].disabled) ||
          this.disabled;
      }
    },
    methods: {
      onChange (value) {
        this.model = value;

        this.$emit(EVENT_NAME_CHANGE, value);
      }
    }
  });
</script>
