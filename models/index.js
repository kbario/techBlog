const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

User.belongsToMany(Post, { through: Comment });
Post.belongsToMany(User, { through: Comment });

module.exports = { User, Post, Comment };
