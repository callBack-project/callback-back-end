const { InterviewExperience } = require('../db/models');

const seedInterviewExperiences = async () => {
  await Promise.all([
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
};

module.exports = seedInterviewExperiences;
