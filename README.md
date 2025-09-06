# Sequelize MySQL Demo

A simple **Node.js project** demonstrating how to use **Sequelize ORM** with **MySQL**, including migrations, models, and seeders.

---

## 🚀 Features

- Sequelize ORM integration
- MySQL database support
- Database migrations
- Seeders for demo data
- Environment-based configuration

---

## 📦 Prerequisites

- Node.js installed
- MySQL server running
- A MySQL database created

Reference: [Sequelize Docs](https://sequelize.org/docs/v6/getting-started/)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/arjun-dholakiya/sequelize-demo.git
```

### 2️⃣ Install Dependencies

```bash
npm install --save sequelize
```

### 3️⃣ Configure Database

Update `config/config.json` with your MySQL credentials:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "your_database",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

---

## 🧩 Understanding Sequelize Concepts

- **Models** → Represent database tables in JavaScript.
- **Migrations** → Version control for your database schema. Instead of manually altering tables, you write migration files that Sequelize can run/undo.
- **Seeders** → Prepopulate your database with test/demo data. Great for initial setups and testing.
- **CLI Commands** → Help automate model generation, migration handling, and data seeding.

---

## 🧩 Sequelize Workflow

### 1. Generate a Model & Migration

```bash
npx sequelize-cli model:generate --name User --attributes name:string,email:string
```

This creates a model (`models/user.js`) and a migration file (`migrations/*create-user.js`).

### 2. Run Migrations

```bash
npx sequelize-cli db:migrate
```

This applies migrations to your database (e.g., creating a `Users` table).

### 3. Create a Seeder

```bash
npx sequelize-cli seed:generate --name demo-user
```

Seeders allow inserting demo data into tables.

Edit the seeder file (`seeders/*-demo-user.js`) to insert dummy data:

```js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { name: 'Arjun', email: 'arjun@gmail.com', createdAt: new Date(), updatedAt: new Date() },
      { name: 'User', email: 'user@gmail.com', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
```

Run seeders:

```bash
npx sequelize-cli db:seed:all
```

This inserts the demo users into the database.

---

## 🔁 Migration & Seeder Management

| Command                              | Description                                    |
| ------------------------------------ | ---------------------------------------------- |
| `npx sequelize-cli model:generate`   | Generate a model and its migration file        |
| `npx sequelize-cli db:migrate`       | Run all pending migrations (update schema)     |
| `npx sequelize-cli db:migrate:undo`  | Revert the last migration                      |
| `npx sequelize-cli seed:generate`    | Create a new seeder file                       |
| `npx sequelize-cli db:seed:all`      | Insert data from all seeders into the database |
| `npx sequelize-cli db:seed:undo:all` | Remove all seeded data (undo seeding)          |

---

## 🧪 Testing

Run the test script (`index.js`):

```js
const { User } = require('./models');
(async () => {
  const users = await User.findAll();
  console.log(users.map(u => u.toJSON()));
})();
```

Run:

```bash
node index.js
```

---

## 📂 Project Structure

```
├── config/
│   └── config.json        # DB configuration
├── migrations/            # Migration files (schema changes)
├── models/                # Sequelize models (represent tables)
│   ├── index.js
│   └── user.js
├── seeders/               # Seeder files (insert demo data)
├── package.json
└── index.js               # Test script
```

---

## 📌 References

- [Sequelize Docs](https://sequelize.org/docs/v6/getting-started/)
- [Sequelize CLI](https://sequelize.org/docs/v6/other-topics/migrations/)
- [MySQL2 Package](https://www.npmjs.com/package/mysql2)

---

## ✅ Done!

You now understand **what models, migrations, and seeders are**, and how to set them up using Sequelize with MySQL. 🎉

