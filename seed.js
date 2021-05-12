const db = require('./db');
const User = require('./db/models/User');
const Event = require('./db/models/Event');


async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  const seedEvents = await Promise.all([
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
  console.log(`seeded ${seedEvents.length} events`);
  console.log(`seeded successfully`);
}

// async function seed() {
//     await db.sync({ force: true });
//     console.log('db synced!');
//     const seedUsers = await Promise.all([
//         User.create({
//           firstName: 'Bilbo',
//           lastName: 'Baggins',
//           userName: 'bbaggins11',
//           password: 'ringbearer3018',
//           position: "Ring Bearer",
//           company: 'Fellowship of the Ring',
//           bio: "hobbit, from the shire",
//           skills: "evading orcs"
//         }),
//         User.create({
//           firstName: 'Harry',
//           lastName: 'Potter',
//           userName: 'halfblood11241',
//           password: 'iluvmagic',
//           position: "Wizard",
//           company: 'Hogwarts'
//         }),,
//         User.create({
//           firstName: 'Lucifer',
//           lastName: 'Morningstart',
//           userName: "morningstart57",
//           password: "password123"
//         }),
//       ]);
//     console.log(`seeded ${seedUsers.length} users`);
//     console.log(`seeded successfully`);
//   }
  // We've separated the `seed` function from the `runSeed` function.
  // This way we can isolate the error handling and exit trapping.
  // The `seed` function is concerned only with modifying the database.
  async function runSeed() {
    console.log('seeding...');
    try {
      await seed();
    } catch (err) {
      console.error(err);
      process.exitCode = 1;
    } finally {
      console.log('closing db connection');
      await db.close();
      console.log('db connection closed');
    }
  }
  // Execute the `seed` function, IF we ran this module directly (`node seed`).
  // `Async` functions always return a promise, so we can use `catch` to handle
  // any errors that might occur inside of `seed`.
  if (module === require.main) {
    runSeed();
  }
  // we export the seed function for testing purposes (see `./seed.spec.js`)
  module.exports = seed;