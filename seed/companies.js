const { Company } = require('../db/models');

const seedCompnaies = async () => {
  await Promise.all([
    Company.create({
      name: 'Apple',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mi est, sollicitudin eget est quis, aliquet congue mi',
      industry: 'Technology',
      size: 'Large',
      location: 'Cupertino, CA',
    }),
    Company.create({
      name: 'Bloomberg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium neque ac ipsum tincidunt, nec molestie odio iaculis.',
      industry: 'Software',
      size: 'Large',
      location: 'New York, NY'
    }),,
    Company.create({
      name: 'Goldman Sachs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac mauris faucibus, consequat ex ut, laoreet diam.',
      industry: 'Finance',
      size: 'Large',
      location: 'New York, NY'
    }),
  ]);
};

module.exports = seedCompnaies;
