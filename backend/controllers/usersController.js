const db = require('../db');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, hashedPassword]
    );

    delete newUser.password;
    res.status(201).json(newUser.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
    } else {
      return res.status(500).json({ error: err.message });
    }
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRes = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userRes.rows.length === 0) {
      return res.status(401).json({ message: 'Email introuvable' });
    }

    const user = userRes.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    delete user.password;
    res.json({ message: 'Connexion réussie', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, username, bio } = req.body;
  try {
    if (password !== '') {
      const hashedPassword = await bcrypt.hash(password, 10);
      const profile = await db.query(
        'UPDATE users SET email = $1, password = $2, username = $3, bio = $4 WHERE id = $5 RETURNING *',
        [email, hashedPassword, username, bio, id]
      );

      delete profile.password;
      res.json(profile.rows[0]);
    } else {
      const profile = await db.query(
        'UPDATE users SET email = $1, username = $2, bio = $3 WHERE id = $4 RETURNING *',
        [email, username, bio, id]
      );
      res.json(profile.rows[0]);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users');
    res.json(users.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser, getAllUsers, updateUser };
