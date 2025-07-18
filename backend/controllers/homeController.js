const getHomePage = (req, res) => {
  res.json({
    message: 'Bienvenue sur la page D\'acceuil!',
    actions: [
      { label: 'Login', path: '/login' },
      { label: 'Register', path: '/register' }
    ]
  });
};

module.exports = { getHomePage };