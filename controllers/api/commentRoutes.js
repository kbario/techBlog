const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Comment.findAll();

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/edit/:id', async (req, res) => {
//   try {
//     const postData = await Comment.findByPk(req.params.id, {
//       attributes: ['id', 'title', 'content'],
//     });
//     const posts = postData.get({ plain: true });

//     res.render('edit-post', posts);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/', async (req, res) => {
  try {
    const newPost = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const newPost = await Comment.update(
//       {
//         title: req.body.title,
//         content: req.body.content,
//       },
//       { where: { id: req.params.id } }
//     );

//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
