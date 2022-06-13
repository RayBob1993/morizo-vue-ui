<template>
  <div>
    <template v-if="error.statusCode === 404">
      <div>
        {{ error.statusCode }}
      </div>

      <h1>
        Запрошенная вами страница не найдена
      </h1>

      <div>
        Возможно, вы указали неправильный адрес или страница, на которую вы хотели зайти, устарела и была удалена."
      </div>
    </template>

    <template v-if="error.statusCode > 404">
      <div>
        {{ error.statusCode }}
      </div>

      <h1>
        Ошибка сервера
      </h1>

      <div v-if="error.message">
        {{ error.message }}
      </div>

      <div v-if="error.stack">
        {{ error.stack }}
      </div>

      <div>
        Произошла ошибка сервера, пожалуйста, обратитесь в службу поддержки!
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'PageError',
    props: {
      error: {
        type: Object,
        default: () => ({})
      }
    }
  };
</script>
