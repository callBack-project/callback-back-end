const { Event } = require('../db/models');

const seedEvents = async () => {
  await Promise.all([
    Event.create({
      name: 'Algo Tuesday',
      location: 'NYC',
      date: new Date('May 17, 2021 03:00:00'),
      description: 'algo practice on tuesdays',
      link: 'meetup.com',
      likes: 10,
    }),
    Event.create({
      name: 'Tech Pannel',
      location: 'Fullstack Academy',
      date: new Date('May 23, 2021 05:00:00'),
      description: 'Pannel of speakers',
      link: 'facebook.com',
      likes: 20,
    }),
  ]);
};

module.exports = seedEvents;
