<template>
  <form
    class="v-form"
    :class="{
      'v-form--disabled': disabled,
      'v-form--readonly': readonly
    }"
    :aria-disabled="disabled"
  >
    <slot/>
  </form>
</template>

<script>
  import Vue from 'vue';
  import { PROP_TYPE_BOOLEAN, PROP_TYPE_OBJECT } from '../../../constants/prop-types';
  import { NAME_FORM } from '../../../constants/components';

  export default Vue.extend({
    name: NAME_FORM,
    provide () {
      return {
        [NAME_FORM]: this
      };
    },
    props: {
      model: {
        type: PROP_TYPE_OBJECT,
        default: () => ({})
      },
      rules: {
        type: PROP_TYPE_OBJECT,
        default: () => ({})
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
    data: () => ({
      fields: []
    }),
    methods: {
      validate () {
        return new Promise((resolve, reject) => {
          const validationPromises = Promise.all(this.fields.map(field => field.validate()));

          validationPromises
            .then(statuses => {
              const isValid = statuses.every(status => status === true);

              return isValid ? resolve(isValid) : reject(isValid);
            });
        });
      },
      clearValidate () {
        setTimeout(() => {
          this.fields.forEach(field => field.clearValidate());
        }, 0);
      },
      addField (field) {
        this.fields.push(field);
      }
    }
  });
</script>
