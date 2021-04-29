const Sequelize = require('sequelize');
const db = require('../db');

const Job = db.define('Job', {
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
  link: {
    type: Sequelize.TEXT,
    allowNull: true,
    unique: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    unique: false
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    unique: false
  },
  level: {
    type: Sequelize.STRING, //maybe use an enum for this
    allowNull: false,
    unique: false
  },
  location: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: false
  },
  remote: {
    type: Sequelize.BOOLEAN,
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
  tableName: 'jobs'
});

module.exports = Job;
