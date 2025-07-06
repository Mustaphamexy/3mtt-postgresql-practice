# Users API with Node.js and PostgreSQL

This is a simple RESTful API built with **Node.js**, **Express**, and **PostgreSQL**. It connects to a PostgreSQL database and performs basic CRUD operations on a `users` table.

---

## 📦 Technologies Used

- Node.js
- Express.js
- PostgreSQL (`pg` module)

---

## 🗂 Project Structure

- `server.js` (or `index.js`) - Main Express server with database connection and route handlers.

---

## 🔧 Prerequisites

- [Node.js](https://nodejs.org/) installed
- [PostgreSQL](https://www.postgresql.org/) installed and running
- PostgreSQL database named `3mttbd` with a `users` table

---

## 📄 Create `users` Table

Before starting the server, make sure the following table exists in your `3mttbd` PostgreSQL database:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
