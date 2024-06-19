Тестовое задание: Разработка REST API
Описание
Вам необходимо разработать небольшой REST API для управления списком задач
(to-do list). API должно позволять выполнять CRUD-операции (создание, чтение,
обновление и удаление) с задачами. Для выполнения задания используйте стек
технологий PostgreSQL, Prisma ORM, Express.JS, Docker и реализуйте авторизацию
пользователей с помощью JWT.

Инструкция по запуску 
git clone https://github.com/Kos1la/Test_Task_for_RevisorVision |
cd Test_Task_for_RevisorVision |
npm install | 
create .env |
add to file .env | 

DATABASE_URL="postgres://postgres:root@db:5432/node_postgres"
JWT_SECRET=1Afd4231dad
PORT = 5000

docker-compose up --build 

В другом терминале выполнить миграции после запуска контейнеров: 
docker-compose exec app npx prisma migrate dev --name init

Документация API 
Небольшой REST API для управления списком задач

адрес - http://localhost:5000/
Маршруты 
Регистрация
URL: /auth/register 
Метод: POST
Описание: Регистрация нового пользователя
Тело запроса:
{
  "email": "some@test.com",
  "password": "password"
}

Вход
URL: /auth/login
Метод: POST
Описание: Вход существующего пользователя
Тело запроса:
{
  "email": "some@test.com",
  "password": "password"
}

Создание задачи
URL: /tasks
Метод: POST
Описание: Создание новой задачи
Тело запроса:
{
  "title": "random task",
  "description": "do smt"
}

Получение всех задач
URL: /tasks
Метод: GET
Описание: Получение всех задач пользователя

Получение задачи по ID
URL: /tasks/:id
Метод: GET
Описание: Получение задачи по ID

Обновление задачи по ID
URL: /tasks/:id
Метод: PUT
Описание: Обновление задачи по ID
Тело запроса:
{
  "title": " New random task",
  "description": "do smt",
  "status":true           // не обязательно
}

Удаление задачи по ID
URL: /tasks/:id
Метод: DELETE
Описание: Удаление задачи по ID


PgAdmin также создан контейнер на порту http://localhost:8080/browser/ для удобства просмотра данных
