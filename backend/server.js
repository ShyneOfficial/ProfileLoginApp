const express = require('express');
const cors = require('cors');
require('dotenv').config();

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

const app = express();
const corsOptions = {
  origin: ['http://localhost:3000'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', homeRoutes);
app.use('/users', usersRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});