<template>
  <label
    class="v-radio-button"
    :class="[
      {
        'v-radio-button--disabled': isDisabled,
        'v-radio-button--active': isChecked
      }
    ]"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      type="radio"
      class="v-radio-button__native"
      :disabled="isDisabled"
      :value="modelValue"
    >

    <span class="v-radio-button__label">
      {{ label }}
    </span>
  </label>
</template>

<script>
  import Vue from 'vue';
  import useRadio from '../useRadio';
  import { NAME_RADIO_BUTTON } from '../../../constants/components';

  export default Vue.extend({
    name: NAME_RADIO_BUTTON,
    mixins: [
      useRadio
    ]
  });
</script>
