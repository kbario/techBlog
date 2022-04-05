const { User } = require('../models');

const userData = [
  {
    first_name: 'Kyle',
    last_name: 'Bario',
    username: 'kbario',
    email: 'kylebario1@gmail.com',
    password: '$2b$10$zaXL7gQTC7Dni2eq9CGg2.g3/2lBj9NeKkNl3ENjwO9zh2ioC3Uea',
  },
  {
    first_name: 'James',
    last_name: 'Jim',
    username: 'jimbo',
    email: 'jj@pee.com',
    password: '$2b$10$zyZWboRI/Cog69SyYEN2sOhyvw5lk9Dm06DuhIIX9XqbwUoH0QMOO',
  },
  {
    first_name: 'Jonny',
    last_name: 'Jones',
    username: 'jonny',
    email: 'jj@gram.com',
    password: '$2b$10$zyZWboRI/Cog69SyYEN2sOhyvw5lk9Dm06DuhIIX9XqbwUoH0QMOO',
  },
  {
    first_name: 'Gabs',
    last_name: 'Great',
    username: 'gabs',
    email: 'gabi@theGreat.com',
    password: '$2b$10$zyZWboRI/Cog69SyYEN2sOhyvw5lk9Dm06DuhIIX9XqbwUoH0QMOO',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
