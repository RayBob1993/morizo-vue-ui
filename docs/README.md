# Morizo-nuxt boilerplate

## Системные требования
* Node >= 16.14.2

## Ссылки окружений
* API Documentation - [https://mysite.com](https://mysite.com)
* live - [https://mysite.com/](https://mysite.com/)
* stage - [https://stage.mysite.com/](https://stage.mysite.com/)
* dev - [https://dev.mysite.com/](https://dev.mysite.com/)

## Настройка окружения для локальной разработки
Создать в корне проекта файл `.env` и внести в него следующие настройки
``` bash
NODE_ENV=development

APP_NAME=morizo-nuxt
# Порт для старта локального сервера
APP_PORT=3000

# Адрес сервера с api
API_HOST=https://dev.mysite.com
# Раздел с api
API_PREFIX=/api
```

## Настройка окружения для dev
``` bash
NODE_ENV=production

APP_NAME=morizo-nuxt
# Порт для старта nuxt сервера
APP_PORT=3000

# Адрес сервера с api
API_HOST=https://dev.mysite.com
# Раздел с api
API_PREFIX=/api
```

## Настройка окружения для stage
``` bash
NODE_ENV=production

APP_NAME=morizo-nuxt
# Порт для старта nuxt сервера
APP_PORT=3000

# Адрес сервера с api
API_HOST=https://stage.mysite.com
# Раздел с api
API_PREFIX=/api
```

## Настройка окружения для live
``` bash
NODE_ENV=development

APP_NAME=morizo-nuxt
# Порт для старта nuxt сервера
APP_PORT=3000

# Адрес сервера с api
API_HOST=https://mysite.com
# Раздел с api
API_PREFIX=/api
```

## Запуск проекта
#### yarn
``` bash
# Установка зависимостей
$ yarn

# Запуск локального сервера localhost:3000
$ yarn serve

# Запуск nuxt на production сервере
$ yarn build && yarn start
```

#### npm
``` bash
# Установка зависимостей
$ npm install

# Запуск dev сервера localhost:3000
$ npm run serve

# Запуск nuxt на production сервере
$ npm run build && npm run start
```

## Инструменты
#### lint
Линтинг кода
``` bash
$ yarn lint
```

#### test
Запуск тестов
``` bash
$ yarn test
```
