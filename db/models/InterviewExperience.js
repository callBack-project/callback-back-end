const Sequelize = require('sequelize');
const db = require('../db');

const InterviewExperience = db.define('InterviewExperience', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  company: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  info: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: false
  },
  offer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    unique: false
  },
  interviewDate: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false
  },
  rounds: {
    type: Sequelize.INTEGER,
    allowNull: true,
    unique: false
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    unique: false
  }
}, {
  tableName: 'interviews'
});

module.exports = InterviewExperience;
