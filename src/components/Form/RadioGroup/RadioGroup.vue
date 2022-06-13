<template>
  <div
    class="v-radio-group"
    :class="[
      `v-radio-group--direction-${direction}`,
      {
        'v-radio-group--disabled': isDisabled
      }
    ]"
    role="group"
  >
    <slot/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { UPDATE_MODEL_EVENT } from '../../../constants/event-names';
  import { NAME_FORM, NAME_FORM_ITEM, NAME_RADIO_GROUP } from '../../../constants/components';
  import { PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../../../constants/prop-types';
  import DIRECTIONS, { HORIZONTAL_DIRECTION } from '../../../constants/direction-names';

  export default Vue.extend({
    name: NAME_RADIO_GROUP,
    provide () {
      return {
        [NAME_RADIO_GROUP]: this
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
        type: PROP_TYPE_STRING,
        default: ''
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
      isDisabled () {
        return this[NAME_FORM]?.disabled ||
          this[NAME_FORM_ITEM]?.disabled ||
          this.disabled;
      }
    },
    methods: {
      onChange (value) {
        this.$emit(UPDATE_MODEL_EVENT, value);
      }
    }
  });
</script>
