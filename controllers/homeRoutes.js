const router = require('express').Router();
const { Post, User } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.loggedIn,
      name: req.session.name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', { logged_in: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup', { logged_in: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    console.log(userPosts);
    const posts = userPosts.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts: posts,
      logged_in: req.session.loggedIn,
      name: req.session.name,
    });
  } catch (err) {
    const hello = err;
    console.log(hello);
    res.status(500).json(err);
  }
});

module.exports = router;
