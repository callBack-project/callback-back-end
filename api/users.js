const { hashPassword } = require('./utils')

const express = require('express');
const router = express.Router();
const { User } = require('../db/models');

// Express Routes for Players - Read more on routing at https://expressjs.com/en/guide/routing.html
router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    // An if/ternary statement to handle not finding allPlayers explicitly
    !allUsers
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleUser = await User.findOne({ where: { id: req.params.id } });
    // An if/ternary statement to handle not finding allPlayers explicitly
    !singleUser
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(singleUser);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
    } = req.body
    
    const hash = await hashPassword(password)
    
    const newUser = await User.create(
      {
        firstName,
        lastName,
        email,
        password:hash
      }
    )
    // An if/ternary statement to handle not finding allPlayers explicitly
    !newUser
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(newUser);
  } catch (error) {
    next(error)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.id);
    updateUser.update(req.body);

    // An if/ternary statement to handle not finding allPlayers explicitly
    !updateUser
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.id);

    // eslint-disable-next-line no-warning-comments
    //TODO:  Make the destroy dependent on the ternary?
    updateUser.destroy();

    // An if/ternary statement to handle not finding allPlayers explicitly
    !updateUser
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
});

// Export our router, so that it can be imported to construct our api routes
module.exports = router;
