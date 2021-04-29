const Sequelize = require('sequelize');
const db = require('../db');

const Company = db.define('Company', {
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
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: false
  },
  industry: {
    type: Sequelize.STRING, //switch to enum when we figure the options out
    allowNull: false,
    unique: false
  },
  size: {
    type: Sequelize.ENUM('Small', 'Medium', 'Large'),
    allowNull: false,
    unique: false
  },
  location: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: false
  },
  algos: {
    type: Sequelize.TEXT, //might need to change this to array of objects/jsonb, not exactly sure how to do that yet
    allowNull: true,
    unique: false
  }
}, {
  tableName: 'companies'
});

module.exports = Company;
