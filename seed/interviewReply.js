const { InterviewReply } = require('../db/models');

const seedInterviewReply = async () => {
  await Promise.all([
    InterviewReply.create({
      reply: 'I just messaged you',
      likes: 10,
    }),
    InterviewReply.create({
      reply: 'Thanks for the post',
      likes: 5,
    }),
    InterviewReply.create({
      reply: 'This is great for my interview',
      likes: 15,
    }),
  ]);
}

  module.exports = seedInterviewReply;