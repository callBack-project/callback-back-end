const express = require('express');
const router = express.Router();
const { InterviewReply, InterviewExperience, User } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allInterviewReplies = await InterviewReply.findAll();

    !allInterviewReplies
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(allInterviewReplies);
  } catch (error) {
    next(error);
  }
});

router.get('/:interviewExperienceId', async (req, res, next) => {
  try {
    const allInterviewReplies = await InterviewReply.findAll({
      where: {
        interviewId: req.params.interviewExperienceId
      }
    });

    !allInterviewReplies
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(allInterviewReplies);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleInterviewReply = await InterviewReply.findOne({ where: { id: req.params.id } });
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
    
    const interviewExperience = await InterviewExperience.findOne({
      where: {
        id: newInterviewReply.interviewId,
      },
    });
    const user = await User.findOne({
        where: {
          id: newInterviewReply.userId,
        },
    });

    await newInterviewReply.setInterviewExperience(interviewExperience);
    await newInterviewReply.setUser(user);

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
    updateInterviewReply.update(req.body);

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
    deleteInterviewReply.destroy();

    !deleteInterviewReply
      ? res.status(404).send('Interview Reply Not Found')
      : res.status(200).json(deleteInterviewReply);
  } catch (error) {
    next(error);
  }
});

// Export our router, so that it can be imported to construct our api routes
module.exports = router;
