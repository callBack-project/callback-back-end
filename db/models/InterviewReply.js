const Sequelize = require('sequelize');
const db = require('../db');

const InterviewReply = db.define('InterviewReply', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  reply: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: false
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    unique: false
  }
}, {
  tableName: 'interviewPostReplies'
});

module.exports = InterviewReply;
