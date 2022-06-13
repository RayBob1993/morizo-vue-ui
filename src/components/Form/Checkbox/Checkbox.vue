<template>
  <label
    class="v-checkbox"
    :class="{
      'v-checkbox--disabled': isDisabled,
      'v-checkbox--active': isChecked
    }"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      type="checkbox"
      class="v-checkbox__native"
      :disabled="isDisabled"
      :value="modelValue"
    >

    <span class="v-checkbox__input"/>

    <span class="v-checkbox__label">
      <template v-if="!$scopedSlots.default">
        {{ label }}
      </template>

      <slot v-else/>
    </span>
  </label>
</template>

<script>
  import Vue from 'vue';
  import useCheckbox from '../useCheckbox';
  import { NAME_CHECKBOX } from '../../../constants/components';

  export default Vue.extend({
    name: NAME_CHECKBOX,
    mixins: [
      useCheckbox
    ]
  });
</script>
