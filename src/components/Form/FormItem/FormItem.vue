<template>
  <div
    class="v-form-item"
    :class="[
      {
        'v-form-item--disabled': isDisabled,
        'v-form-item--readonly': isReadonly,
        'v-form-item--required': isRequired,
        'v-form-item--error': isValidationStatusError,
        'v-form-item--validating': isValidationStatusValidating,
        'v-form-item--success': isValidationStatusSuccess
      }
    ]"
    :aria-invalid="isValidationStatusError"
    :aria-disabled="isDisabled"
  >
    <label
      v-if="label"
      class="v-form-item__label"
    >
      {{ label }}

      <span
        v-if="isRequired"
        class="v-form-item__label-required"
      >
        *
      </span>
    </label>

    <slot/>

    <div
      v-if="validationErrors.length"
      class="v-form-item__errors"
    >
      <div
        v-for="(error, index) in validationErrors"
        :key="`error-${index}`"
        class="v-form-item__errors-error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Schema from 'async-validator';
  import { PROP_TYPE_BOOLEAN, PROP_TYPE_STRING } from '../../../constants/prop-types';
  import { NAME_FORM, NAME_FORM_ITEM } from '../../../constants/components';

  const VALIDATION_STATUSES = {
    SUCCESS: 'success',
    ERROR: 'error',
    VALIDATING: 'validating'
  };

  export default Vue.extend({
    name: NAME_FORM_ITEM,
    provide () {
      return {
        [NAME_FORM_ITEM]: this
      };
    },
    inject: [
      NAME_FORM
    ],
    props: {
      label: {
        type: PROP_TYPE_STRING,
        default: ''
      },
      disabled: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      readonly: {
        type: PROP_TYPE_BOOLEAN,
        default: false
      },
      prop: {
        type: PROP_TYPE_STRING,
        default: ''
      }
    },
    data: () => ({
      validationStatus: '',
      validationErrors: []
    }),
    computed: {
      modelValue () {
        return this[NAME_FORM].model[this.prop];
      },
      rules () {
        return this[NAME_FORM].rules[this.prop];
      },
      isDisabled () {
        return this[NAME_FORM].disabled || this.disabled;
      },
      isReadonly () {
        return this[NAME_FORM].readonly || this.readonly;
      },
      isRequired () {
        return this.rules
          ? this.rules.find(rule => rule.required === true)?.required
          : false;
      },
      isValidationStatusError () {
        return this.validationStatus === VALIDATION_STATUSES.ERROR;
      },
      isValidationStatusValidating () {
        return this.validationStatus === VALIDATION_STATUSES.VALIDATING;
      },
      isValidationStatusSuccess () {
        return this.validationStatus === VALIDATION_STATUSES.SUCCESS;
      }
    },
    watch: {
      modelValue () {
        this.validate();
      },
      isValidationStatusSuccess (boolean) {
        if (boolean) {
          this.clearValidate();
        }
      }
    },
    created () {
      if (this.prop) {
        this[NAME_FORM].addField(this);
      }
    },
    methods: {
      validate () {
        const model = {
          [this.prop]: this.modelValue
        };

        if (!this.modelValue && !this.prop && !this.rules) {
          return;
        }

        const descriptor = this.getDescriptor();
        const validator = new Schema(descriptor);

        this.validationStatus = VALIDATION_STATUSES.VALIDATING;

        return validator.validate(model, {
          firstFields: true
        }).then(() => {
          this.validationStatus = VALIDATION_STATUSES.SUCCESS;

          return true;
        }).catch(({ errors }) => {
          this.validationStatus = VALIDATION_STATUSES.ERROR;

          this.validationErrors = errors.map(({ message }) => message);

          return false;
        });
      },
      clearValidate () {
        this.validationStatus = '';
        this.validationErrors = [];
      },
      getDescriptor () {
        const descriptor = {};

        if (this.rules) {
          descriptor[this.prop] = this.rules;
        }

        return descriptor;
      }
    }
  });
</script>
