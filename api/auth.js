const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const { comparePassword } = require('./utils')

const userNotFound = (next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
}

router.get('/me', async (req, res, next) => {
  console.log('sesh-->',req.session, 'req.bod-->', req.body)
  try {
    if (!req.session.userId) {
      userNotFound(next);
    } else {
      const user = await User.findByPk(req.session.userId);
      console.log('req user->', )
      user ? res.json(user) : userNotFound(next);
    }
  } catch (err) {
    next(err);
  }
})

router.put('/login', async (req, res, next) => {
  const err = new Error('Incorrect email or password!');
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      }
    });

    if (!user) {
      err.status = 401;
      next(err);
      throw new Error(err)
    }

    const valid = await comparePassword(req.body.password, user.password)

    if (!valid) {
      err.status = 401;
      next(err);
      throw new Error(err)
    }
      
    req.session.userId = user.id
    res.status(200).json(user);
    
    //  else {
      
      // err.status = 401;
      // next(err);
    // }
  } catch (err) {
    next(err);
  }
});

module.exports = router