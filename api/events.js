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

router.post('/', async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);

    // An if/ternary statement to handle not finding allPlayers explicitly
    !newEvent
      ? res.status(404).send('Event Not Found')
      : res.status(200).json(newEvent);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateEvent = await Event.findByPk(req.params.id);
    updateEvent.update(req.body)

    // An if/ternary statement to handle not finding allPlayers explicitly
    !updateEvent
      ? res.status(404).send('Event Not Found')
      : res.status(200).json(updateEvent);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const updateEvent = await Event.findByPk(req.params.id);
    updateEvent.destroy()

    // An if/ternary statement to handle not finding allPlayers explicitly
    !updateEvent
      ? res.status(404).send('Event Not Found')
      : res.status(200).json(updateEvent);
  } catch (error) {
    next(error);
  }
});

// Export our router, so that it can be imported to construct our api routes
module.exports = router;