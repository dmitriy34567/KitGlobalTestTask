Вітаю
Я реалізував тестову таску на Node Express та Postgress
Бо в це було для мене простіше. Але можу й на Нест переписати з  монго якщо дуже потрібно


Що реалізовано 
Основні моделі а саме Проект і Таска а також реалізація логіну і реєстрації JWT
Тобто основне


Чого немає
Не зроблена валідація і можна попрацювати ще над фільтрацією
Не зроблена документація в Swagger 

але можу доробити без проблем якщо мінімально все влаштовує.



Для того щоб підняти проект потрібно завантажити його в папку
Скачати Postgress створити в ньому бд і запамятати пароль при створенні
В папці з проектом створити файт .env і вказати в ньому 

PORT=5000
DB_NAME= назва бд яку ви створили 
DB_USER=postgres
DB_PASSWORD= пароль входу в постгресс
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY= рандомний секретний ключ який надалі буде використовуватися для генервання токену

Після цього потрібно в консолі в папці проекту виконати команду npm i
Після завантаження модулів можна написати npm run dev
Вітаю. Проект запущено на http://localhost:5000/

