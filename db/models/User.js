const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('User', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false
  },
  position: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: false
  },
  bio: {
    type: Sequelize.TEXT,
    allowNull: true,
    unique: false
  },
  skills: {
    type: Sequelize.TEXT,
    allowNull: true,
    unique: false,
    field: "skills/technologies"
  },
  picture: {
    type: Sequelize.STRING, //url? maybe s3 bucket
    allowNull: true,
    unique: false
  }
}, {
  tableName: 'users'
});

module.exports = User;
