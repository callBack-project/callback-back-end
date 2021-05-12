const express = require('express');
const router = express.Router();
const { InterviewReply } = require('../db/models');

// Express Routes for Players - Read more on routing at https://expressjs.com/en/guide/routing.html
router.get('/', async (req, res, next) => {
  try {
    const allInterviewReplies = await InterviewReply.findAll();
    // An if/ternary statement to handle not finding allPlayers explicitly
    !allInterviewReplies
      ? res.status(404).send('Interview Replies Not Found')
      : res.status(200).json(allInterviewReplies);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleInterviewReply = await InterviewReply.findOne({where: {id: req.params.id}});
    // An if/ternary statement to handle not finding allPlayers explicitly
    !singleInterviewReply
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(singleInterviewReply);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newInterviewReply = await InterviewReply.create(req.body);

    // An if/ternary statement to handle not finding allPlayers explicitly
    !newInterviewReply
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(newInterviewReply);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateInterviewReply = await InterviewReply.findByPk(req.params.id);
    updateInterviewReply.update(req.body)

    // An if/ternary statement to handle not finding allPlayers explicitly
    !updateInterviewReply
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(updateInterviewReply);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleteInterviewReply = await InterviewReply.findByPk(req.params.id);
    deleteInterviewReply.destroy()

    // An if/ternary statement to handle not finding allPlayers explicitly
    !deleteInterviewReply
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(deleteInterviewReply);
  } catch (error) {
    next(error);
  }
});

// Export our router, so that it can be imported to construct our api routes
module.exports = router;