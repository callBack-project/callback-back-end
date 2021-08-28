const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const { comparePassword } = require('./utils')

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
      
    //req.session.userId = user.id;
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