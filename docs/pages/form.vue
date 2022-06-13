<template>
  <div class="container">
    <v-form>
      <v-form-item
        label="Ваше имя"
        prop="name"
      >
        <v-input v-model="form.model.name"/>
      </v-form-item>

      <v-form-item
        label="Опишите себя"
        prop="description"
      >
        <v-input
          v-model="form.model.description"
          type="textarea"
        />
      </v-form-item>

      <v-form-item
        label="Род занятия"
        prop="type"
      >
        <v-checkbox-group v-model="form.model.type">
          <v-checkbox
            label="php"
            model-value="1"
          />

          <v-checkbox
            label="go"
            model-value="2"
          />

          <v-checkbox
            label="js"
            model-value="3"
          />

          <v-checkbox
            label="css"
            model-value="4"
          />
        </v-checkbox-group>
      </v-form-item>

      <v-form-item
        label="Укажите пол"
        prop="gender"
      >
        <v-radio-group v-model="form.model.gender">
          <v-radio
            label="Мужчина"
            model-value="1"
          />

          <v-radio
            label="Женщина"
            model-value="2"
          />
        </v-radio-group>
      </v-form-item>

      <v-button type="submit">
        Отправить
      </v-button>
    </v-form>
  </div>
</template>

<script>
  import {
    VForm,
    VFormItem,
    VCheckbox,
    VCheckboxGroup,
    VRadio,
    VRadioGroup,
    VInput,
    VButton
  } from '../../src';

  export default {
    name: 'PageMain',
    components: {
      VForm,
      VFormItem,
      VCheckbox,
      VCheckboxGroup,
      VRadio,
      VRadioGroup,
      VInput,
      VButton
    },
    data: () => ({
      form: {
        model: {
          name: '',
          description: '',
          type: [],
          gender: ''
        }
      }
    })
  };
</script>
