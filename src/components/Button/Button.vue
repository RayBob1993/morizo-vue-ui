<template>
  <button
    ref="button"
    v-bind="$attrs"
    :type="nativeType"
    class="v-button"
    :class="{
      'v-button--rounded': rounded,
      'v-button--plain': plain,
      'v-button--expanded': expanded,
      'v-button--disabled': isDisabled,
      'v-button--loading': loading
    }"
    :disabled="isDisabled"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<script>
  import Vue from 'vue';
  import { NAME_BUTTON, NAME_FORM, NAME_FORM_ITEM } from '../../constants/components';
  import { PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../../constants/prop-types';

  export default Vue.extend({
    name: NAME_BUTTON,
    inject: {
      [NAME_FORM]: {
        default: null
      },
      [NAME_FORM_ITEM]: {
        default: null
      }
    },
    props: {
      loading: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      disabled: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      plain: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      rounded: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      expanded: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      nativeType: {
        type: PROP_TYPE_STRING,
        default: 'button',
        validator: value => [
          'button',
          'submit',
          'reset'
        ].includes(value)
      }
    },
    computed: {
      isDisabled () {
        return this[NAME_FORM]?.disabled ||
          this[NAME_FORM_ITEM]?.disabled ||
          this.loading || this.disabled;
      }
    }
  });
</script>
