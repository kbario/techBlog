const router = require('express').Router();
const { User } = require('../../models');
const { Op } = require('@sequelize/core');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.user_id = dbUserData.id;
    req.session.name = dbUserData.first_name;
    req.session.loggedIn = true;
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log('\x1B[1;33mHERE\x1B[0m', err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { username: req.body.email }],
      },
    });
    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email. Please try again!' });
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }
    req.session.user_id = dbUserData.id;
    req.session.name = dbUserData.first_name;
    req.session.loggedIn = true;
    res
      .status(200)
      .json({ user: dbUserData, message: 'You are now logged in!' });
    res.render('homepage', { logged_in: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
