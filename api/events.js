const express = require('express');
const router = express.Router();
const { Event } = require('../db/models');

// Express Routes for Players - Read more on routing at https://expressjs.com/en/guide/routing.html
router.get('/', async (req, res, next) => {
  try {
    const allEvents = await Event.findAll();
    // An if/ternary statement to handle not finding allPlayers explicitly
    !allEvents
      ? res.status(404).send('Events Not Found')
      : res.status(200).json(allEvents);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleEvent = await Event.findOne({where: {id: req.params.id}});
    // An if/ternary statement to handle not finding allPlayers explicitly
    !singleEvent
      ? res.status(404).send('Event Not Found')
      : res.status(200).json(singleEvent);
  } catch (error) {
    next(error);
  }
});

// router.post('/', async (req, res, next) => {
//   try {
//     const newUser = await User.create(req.body);

//     // An if/ternary statement to handle not finding allPlayers explicitly
//     !newUser
//       ? res.status(404).send('Users Not Found')
//       : res.status(200).json(newUser);
//   } catch (error) {
//     next(error);
//   }
// });

// router.put('/:id', async (req, res, next) => {
//   try {
//     const updateUser = await User.findByPk(req.params.id);
//     updateUser.update(req.body)

//     // An if/ternary statement to handle not finding allPlayers explicitly
//     !updateUser
//       ? res.status(404).send('Users Not Found')
//       : res.status(200).json(updateUser);
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const updateUser = await User.findByPk(req.params.id);
//     updateUser.destroy()

//     // An if/ternary statement to handle not finding allPlayers explicitly
//     !updateUser
//       ? res.status(404).send('Users Not Found')
//       : res.status(200).json(updateUser);
//   } catch (error) {
//     next(error);
//   }
// });

// Export our router, so that it can be imported to construct our api routes
module.exports = router;