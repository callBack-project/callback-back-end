const db = require('./db');
const { User, InterviewExperience } = require('./db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');
  const seedUsers = await Promise.all([
    User.create({
      firstName: 'Bilbo',
      lastName: 'Baggins',
      userName: 'bbaggins11',
      password: 'ringbearer3018',
      position: 'Ring Bearer',
      company: 'Fellowship of the Ring',
      bio: 'hobbit, from the shire',
      skills: 'evading orcs',
    }),
    User.create({
      firstName: 'Harry',
      lastName: 'Potter',
      userName: 'halfblood11241',
      password: 'iluvmagic',
      position: 'Wizard',
      company: 'Hogwarts',
    }),
    User.create({
      firstName: 'Lucifer',
      lastName: 'Morningstart',
      userName: 'morningstart57',
      password: 'password123',
    }),
  ]);
  const seedInterviewExperiences = await Promise.all([
    InterviewExperience.create({
      position: 'Software Engineer',
      company: 'Google',
      info: 'Google Apprenticeship',
      offer: 'true',
      interviewDate: 1519211809934,
      rounds: 4,
      likes: 38,
    }),
    InterviewExperience.create({
      position: 'Senior Software Engineer',
      company: 'Apple',
      info: '$170k/year plus benefits',
      offer: 'false',
      interviewDate: 1519211809934,
      rounds: 3,
      likes: 22,
    }),
    InterviewExperience.create({
      position: 'Systems Engineer',
      company: 'Callback',
      info: '200k/year plus lamborghini',
      offer: 'true',
      interviewDate: 1519211809934,
      rounds: 6,
      likes: 100,
    }),
  ]);
  console.log(`seeded ${seedUsers.length} users`);
  console.log(`seeded ${seedInterviewExperiences.length} users`);
  console.log(`seeded successfully`);
}
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
