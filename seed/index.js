const db = require('../db');
//const { User, InterviewExperience, Company, Event } = require('../db/models');
const seedUsers = require('./users');
const seedInterviewExperiences = require('./interviewExperiences');
const seedCompanies = require('./companies');
const seedEvents = require('./events');
const seedJobReplies = require('./jobReplies');
const seedInterviewReply = require('./interviewReply')
const seedJobs = require('./jobs')

async function seed() {


    await db.sync({ force: true });
    console.log('db synced!');

    await seedUsers();
    await seedCompanies();
    await seedInterviewExperiences();
    await seedEvents()
    await seedInterviewReply()
    await seedJobs()


  console.log(`seeded ${seedUsers} Users`);
  //console.log(`seeded ${seedInterviewExperiences.length} InterviewExperiences`);
  //console.log(`seeded ${seedCompanies.length} Companies`);
  //console.log(`seeded ${seedEvents.length} Events`);

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
