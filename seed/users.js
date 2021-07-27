const { User } = require('../db/models');

const seedUsers = async () => {
  await Promise.all([
    User.create({
      firstName: 'Bilbo',
      lastName: 'Baggins',
      userName: 'bbaggins11',
      email: 'bilbob@gmail.com',
      password: 'ringbearer3018',
      position: 'Ring Bearer',
      company: 'Fellowship of the Ring',
      bio: 'hobbit, from the shire',
      skills: 'evading orcs',
    }),
    User.create({
      firstName: 'Harry',
      lastName: 'Potter',
      email: 'harryp@gmail.com',
      userName: 'halfblood11241',
      password: 'iluvmagic',
      position: 'Wizard',
      company: 'Hogwarts',
    }),
    User.create({
      firstName: 'Lucifer',
      lastName: 'Morningstart',
      userName: 'morningstart57',
      email:'luciferm@gmail.com',
      password: 'password123',
    }),
  ]);
  
};

module.exports = seedUsers;
