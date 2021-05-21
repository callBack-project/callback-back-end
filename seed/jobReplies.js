const { JobReply } = require('../db/models');

const seedJobReplies = async () => {
  await Promise.all([
    JobReply.create({
      reply: 'Lorem Ipsum Magnifco',
      likes: 22,
    }),
    JobReply.create({
      reply: 'Lorem Ipsum Ipactum',
      likes: 9,
    }),
    JobReply.create({
      reply: 'Lorem Ipsum Crypto Change O',
      likes: 0,
    }),
  ]);
};

module.exports = seedJobReplies;
