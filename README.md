## SuidaQuest API
![image](https://github.com/user-attachments/assets/b8f65bfa-8e01-4351-9d33-dc46d1f5c520)
SuidaQuest API - API веб-приоложения SuidaQuest
## Эндпоинты
1. /getAllQuests - получение всех квестов (GET)
2. /postQuest - добавление нового квеста (POST)
3. /getOneQuest/:id - получение одного квеста по идентификатору (GET)
4. /updateQuest/:id - частично обновить квест по идентификатору (PATCH)
5. /deleteQuest/:id - удалить квест по идентификатору (DELETE)
6. /getAllUsers - получение всех пользователей (GET)
7. /postUser - добавление нового пользователя (POST)
8. /getOneUser/:id - получение одного пользователя по идентификатору (GET)
9. /updateUser/:id - частично обновить информацию о пользователе по идентификатору (PATCH)
10. /deleteUser/:id - удалить пользователя по идентификатору (DELETE)
## Зависимости
 1. "dotenv": "^16.4.5",
 2. "express": "^4.19.2",
 3. "mongoose": "^8.5.1",
 4. "nodemon": "^3.1.4"
## Структура проекта
1. models - модели Mongoose
2. routes - эндпоинты
3. index.js - сервер
