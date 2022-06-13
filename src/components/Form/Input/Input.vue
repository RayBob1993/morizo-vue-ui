<template>
  <div
    class="v-input"
    :class="{
      'v-input--disabled': isDisabled,
      'v-input--readonly': isReadonly
    }"
  >
    <div class="v-input__control">
      <component
        :is="type"
        ref="input"
        :type="nativeType"
        class="v-input__native"
        :value="value"
        v-bind="$attrs"
        :disabled="isDisabled"
        :readonly="isReadonly"
        v-on="inputListeners"
      />
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { UPDATE_MODEL_EVENT } from '../../../constants/event-names';
  import { PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../../../constants/prop-types';
  import { NAME_FORM, NAME_FORM_ITEM, NAME_INPUT } from '../../../constants/components';

  export default Vue.extend({
    name: NAME_INPUT,
    inject: {
      [NAME_FORM]: {
        default: null
      },
      [NAME_FORM_ITEM]: {
        default: null
      }
    },
    inheritAttrs: false,
    props: {
      value: {
        type: PROP_TYPE_STRING,
        default: ''
      },
      type: {
        type: PROP_TYPE_STRING,
        default: 'input',
        validator: value => [
          'input',
          'textarea'
        ].includes(value)
      },
      nativeType: {
        type: PROP_TYPE_STRING,
        default: 'text',
        validator: value => [
          'text',
          'email',
          'number',
          'tel',
          'url',
          'search',
          'password'
        ].includes(value)
      },
      disabled: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      readonly: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      }
    },
    computed: {
      isDisabled () {
        return this[NAME_FORM]?.disabled ||
          this[NAME_FORM_ITEM]?.disabled ||
          this.disabled;
      },
      isReadonly () {
        return this[NAME_FORM]?.readonly ||
          this[NAME_FORM_ITEM]?.readonly ||
          this.readonly;
      },
      inputListeners () {
        return {
          ...this.$listeners,
          input: event => {
            this.$emit(UPDATE_MODEL_EVENT, event.target.value);
          }
        };
      }
    },
    methods: {
      focus () {
        this.$refs.input.focus();
      }
    }
  });
</script>
