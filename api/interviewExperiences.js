const express = require('express');
const router = express.Router();
const { interViewExperience } = require('../db/models');

//GET ALL INTERVIEW EXPERIENCES
router.get('/', async (req, res, next) => {
  try {
    const allInterviewExperiences = await interViewExperience.findAll();

    !allInterviewExperiences
      ? res.sendStatus(404)
      : res.status(200).send(allInterviewExperiences);
  } catch (error) {
    next(error);
  }
});

//GET SINGLE INTERVIEW EXPERIENCE BASED ON ID
router.get('/:id', async (req, res, next) => {
  try {
    const singleInterviewExperiences = await interViewExperience.findOne({
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
    const newInterviewExperience = await interViewExperience.create(req.body);

    !newInterviewExperience
      ? res.sendStatus(400)
      : res.status(201).send(newInterviewExperience);
  } catch (error) {
    next(error);
  }
});

//UPDATE AN INTERVIEW EXPERIENCE
router.put('/:id', async (req, res, next) => {
  try {
    const updateInterviewExperience = await interViewExperience.update(
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

router.delete('/id', async (req, res, next) => {
  await interViewExperience.destroy({
    where: { id: req.params.id },
  });
  res.sendStatus(204);
});
