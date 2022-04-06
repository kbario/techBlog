const { Post } = require('../models');

const postData = [
  {
    title: 'My First Post',
    content: 'breaks are good, we should take them more often.',
    user_id: '1',
  },
  {
    title: 'My First Post',
    content: 'when the going gets tough, bring out the big guns',
    user_id: '2',
  },
  {
    title: 'My First Post',
    content: "THIS IS MY FIRST POST. I'M SO EXCITED TO BE HERE.",
    user_id: '4',
  },
  {
    title: 'My First Post',
    content: "puoi condurre un cavallo all'acqua ma non puoi farlo bere",
    user_id: '3',
  },
  {
    title: 'Times are tough',
    content: "I haven't seen my family in 9000 years",
    user_id: '4',
  },
  {
    title: 'banging your head',
    content: 'my chihuahua just hit her head trying to get out the door 😅',
    user_id: '1',
  },
  {
    title: 'had enough',
    content: "i'm sick of working in an inefficient cafe",
    user_id: '3',
  },
  {
    title: 'My muscles are sore',
    content:
      "That feeling when you haven't worked out in 1000 years and then decide to do a push up... big oof",
    user_id: '3',
  },
  {
    title: 'my puppy is still old',
    content:
      "i gave my dog some anti-aging serum today but she hasn't got any younger... like what is going on???",
    user_id: '1',
  },
  {
    title: 'wisdom',
    content:
      'there are only two failures on the road to truth, giving up part-way through, and never starting.',
    user_id: '3',
  },
  {
    title: "I'm becoming a baker",
    content:
      'I made my first batch of choc chip cookies today. I feel a real pull towards this line of work.',
    user_id: '4',
  },
  {
    title: "I've changed my mind...",
    content:
      "Baking is not for me. Turns out you've got to wash the dishes you make when making the baked goods. I think not.",
    user_id: '4',
  },
  {
    title: 'Content moderation',
    content:
      "There is some real nonsense being allowed to circulate on here, and i don't appreciate it one bit. I think it's time techBlog took a trick out of Zuck's hat.",
    user_id: '1',
  },
  {
    title: 'Good Bye.',
    content:
      "In light of recent events, I think it's time I deleted my account to this site.",
    user_id: '2',
  },
  {
    title: 'Bugger.',
    content:
      "Turns out you can't delete your account from techBlog... Umm, this should be illegal.",
    user_id: '2',
  },
  {
    title: 'Water is the spice of life',
    content:
      'Without water, we would all die. just remember that next time you pee your urine down a drain pipe and not drink it like a normal human being. all water counts mate...',
    user_id: '2',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
