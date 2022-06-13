<template>
  <label
    class="v-checkbox-button"
    :class="{
      'v-checkbox-button--disabled': isDisabled,
      'v-checkbox-button--active': isChecked
    }"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      type="checkbox"
      class="v-checkbox-button__native"
      :disabled="isDisabled"
      :value="modelValue"
    >

    <span class="v-checkbox-button__label">
      {{ label }}
    </span>
  </label>
</template>

<script>
  import Vue from 'vue';
  import useCheckbox from '../useCheckbox';
  import { NAME_CHECKBOX_BUTTON } from '../../../constants/components';

  export default Vue.extend({
    name: NAME_CHECKBOX_BUTTON,
    mixins: [
      useCheckbox
    ]
  });
</script>
