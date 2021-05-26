const { Job } = require('../db/models');

const seedJobs = async () => {
  await Promise.all([
    Job.create({
      position: 'Apple Genius',
      company: 'Apple',
      link: 'https://random.apple.link',
      description: 'You get to be an apple genius',
      isActive: true,
      level: 'Large',
      location: 'Cupertino, CA',
      remote: true,
    }),
    Job.create({
      position: 'Intern',
      company: 'Google',
      link: 'https://random.google.link',
      description: 'You get to be a google intern',
      isActive: true,
      level: 'Large',
      location: 'New York, NY',
      remote: true,
    }),,
    Job.create({
      position: 'Engineer',
      company: 'Netflix',
      link: 'https://random.netflix.link',
      description: 'You get to be a Netflix engineer and chill',
      isActive: true,
      level: 'Large',
      location: 'Los Gatos, CA',
      remote: true,
    }),
  ]);
};

module.exports = seedJobs;
