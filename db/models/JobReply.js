const Sequelize = require('sequelize');
const db = require('../db');

const JobReply = db.define('JobReply', {
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
  tableName: 'jobPostReplies'
});

module.exports = JobReply;
