<template>
  <label
    class="v-radio"
    :class="[
      {
        'v-radio--disabled': isDisabled,
        'v-radio--active': isChecked
      }
    ]"
  >
    <input
      v-model="model"
      v-bind="$attrs"
      type="radio"
      class="v-radio__native"
      :disabled="isDisabled"
      :value="modelValue"
    >

    <span class="v-radio__input"/>

    <span class="v-radio__label">
      {{ label }}
    </span>
  </label>
</template>

<script>
  import Vue from 'vue';
  import useRadio from '../useRadio';
  import { NAME_RADIO } from '../../../constants/components';

  export default Vue.extend({
    name: NAME_RADIO,
    mixins: [
      useRadio
    ]
  });
</script>
