const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('Event', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: Sequelize.TEXT,
    allowNull: false, //should have a default "remote" option on front end
    unique: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    unique: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: false
  },
  link: {
    type: Sequelize.TEXT,
    allowNull: true,
    unique: true
  },
  likes: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    unique: false
  }
}, {
  tableName: 'events'
});

module.exports = Event;
