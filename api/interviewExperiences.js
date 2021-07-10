const express = require('express');
const router = express.Router();
const { InterviewExperience } = require('../db/models');

//GET ALL INTERVIEW EXPERIENCES
router.get('/', async (req, res, next) => {
  try {
    const allInterviewExperiences = await InterviewExperience.findAll();

    !allInterviewExperiences
      ? res.sendStatus(404)
      : res.status(200).send(allInterviewExperiences);
  } catch (error) {
    next(error);
  }
});

//GET SINGLE INTERVIEW EXPERIENCE BY ID
router.get('/:id', async (req, res, next) => {
  try {
    const singleInterviewExperiences = await InterviewExperience.findOne({
      where: { id: req.params.id },
    });

    !singleInterviewExperiences
      ? res.sendStatus(404)
      : res.status(200).send(singleInterviewExperiences);
  } catch (error) {
    next(error);
  }
});

//CREATE A NEW INTERVIEW EXPERIENCE
router.post('/', async (req, res, next) => {
  try {
    const newInterviewExperience = await InterviewExperience.create(req.body);

    !newInterviewExperience
      ? res.sendStatus(400)
      : res.status(201).send(newInterviewExperience);
  } catch (error) {
    next(error);
  }
});

//UPDATE AN INTERVIEW EXPERIENCE BY ID
router.put('/:id', async (req, res, next) => {
  try {
    const updateInterviewExperience = await InterviewExperience.update(
      req.body,
      {
        returning: true,
        where: {
          id: req.params.id,
        },
      }
    );

    !updateInterviewExperience
      ? res.sendStatus(400)
      : res.status(204).send(updateInterviewExperience);
  } catch (error) {
    next(error);
  }
});

//DELETE AN INTERVIEW EXPERIENCE BY ID
router.delete('/:id', async (req, res, next) => {
  const deleteInterviewExperience = await InterviewExperience.findByPk(
    req.params.id
  );

  !deleteInterviewExperience
    ? res.sendStatus(400)
    : await deleteInterviewExperience.destroy()
      res.status(200).send(req.params)
    ;
});

module.exports = router;