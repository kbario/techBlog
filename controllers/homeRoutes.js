const router = require('express').Router();
const { Post, User } = require('../models');
const { withAuth, formatData } = require('../utils/helpers');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      include: {
        model: User,
        attributes: ['username'],
      },
      order: [['updatedAt', 'DESC']],
      // offset: 0,
      // limit: 5,
    });
    if (userPosts) {
      const posts = userPosts.map((post) => post.get({ plain: true }));
      const postData = formatData(posts);
      console.log('\x1B[1;33mHERE\x1B[0m', postData);
      res.render('homepage', {
        posts: postData,
        logged_in: req.session.loggedIn,
        name: req.session.name,
      });
    }
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    res.render('login', { logged_in: req.session.loggedIn });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    res.render('signup', { logged_in: req.session.loggedIn });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userPosts = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    if (userPosts) {
      const posts = userPosts.map((post) => post.get({ plain: true }));
      const postData = formatData(posts);
      // console.log('\x1B[1;33mHERE\x1B[0m', postData);
      res.render('dashboard', {
        posts: postData,
        logged_in: req.session.loggedIn,
        name: req.session.name,
      });
    } else {
      res.render('dashboard', {
        logged_in: req.session.loggedIn,
        name: req.session.name,
      });
    }
  } catch (err) {
    // console.log('\x1B[1;33mHERE\x1B[0m', err);
    res.status(500).json(err);
  }
});

router.get('/create', withAuth, async (req, res) => {
  try {
    res.render('create-post', { logged_in: req.session.loggedIn });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

router.get('/edit', withAuth, async (req, res) => {
  try {
    res.render('edit-post', { logged_in: req.session.loggedIn });
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
