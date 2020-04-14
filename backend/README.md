<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">FASTFEET Back-end</h3>

---

<p align="center"> A fictional shipping company back-end
    <br>
</p>

## 📝 Table of Contents

- [Getting Started](#getting_started)
- [Built Using](#built_using)
- [Author](#authors)

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

<ul>
  <li>
  Run a PostgreSQL database with the following settings:
  </li>
   <ul>
    <li>Database name: 'fastfeetpostgres';</li>
    <li>Username: 'postgres';</li>
    <li>Password: 'fastfeet';</li>
    <li>Port: 5432</li>
  </ul>
  </br>
  <li>Run a Redis database (can be the alpine version) with the following settings:</li>
  <ul>
    <li>Port: 6379</li>
    <li>Host: 127.0.0.1 (if needed, you can modify this host by changing 'config/redis.js' file)</li>
  </ul>
</ul>

### Installing

Install all project dependencies running the command:

```
yarn
```

</br>
Create all tables inside database running the migrations:

```
yarn sequelize db:migrate
```

</br>

Create a default admin user for testing purposes:

```
yarn sequelize db:seed:all
```

</br>

## 🔧 Running the tests <a name = "tests"></a>

Explain how to run the automated tests for this system.

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## ⛏️ Built Using <a name = "built_using"></a>

- [PostgreSQL](https://www.postgresql.org/) - Database
- [Redis](https://redis.io/) - Database
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Author <a name = "authors"></a>

- [@victorcp91](https://github.com/victorcp91)

Inspired by [Rocketseat](https://github.com/kylelobo/The-Documentation-Compendium/contributors) GoStack course.
