const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
});

pool.connect()
  .then(() => console.log('✅ Connexion à la base PostgreSQL réussie.'))
  .catch(err => console.error('❌ Erreur de connexion PostgreSQL:', err));

module.exports = pool;
