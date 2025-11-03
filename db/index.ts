require('dotenv').config();
const { Pool } = require("pg");

export const pool = new Pool({
  user: "postgres",        // your postgres username
  host: "localhost",
  database: process.env.database_name,      // your database name
  password: process.env.database_password,
  port: 5432,
});