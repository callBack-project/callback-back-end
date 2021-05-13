const express = require('express');
const router = express.Router();
const { JobReply } = require('../db/models');


//GET ALL JOB REPLIES
router.get('/', async (req, res, next) => {
  try {
    const allJobReplies = await JobReply.findAll();

    !allJobReplies ? res.sendStatus(404) : res.status(200).send(allJobReplies);
  } catch (error) {
    next(error);
  }
});

//GET SINGLE JOB REPLY BY ID
router.get('/:id', async (req, res, next) => {
  try {
    const singleJobReply = await JobReply.findOne({
      where: { id: req.params.id },
    });

    !singleJobReply
      ? res.sendStatus(404)
      : res.status(200).send(singleJobReply);
  } catch (error) {
    next(error);
  }
});

//CREATE A NEW REPLY
router.post('/', async (req, res, next) => {
  try {
    const newJobReply = await JobReply.create(req.body);

    !newJobReply ? res.sendStatus(404) : res.status(201).send(newJobReply);
  } catch (error) {
    next(error);
  }
});

//UPDATE A JOB REPLY By ID
router.put('/:id', async (req, res, next) => {
  try {
    const updateJobReply = await JobReply.findByPk(req.params.id);

    if (!updateJobReply) {
      res.sendStatus(400);
    } else {
      updateJobReply.update(req.body);
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

//DELETE A JOB REPLY BY ID
router.delete('/:id', async (req, res, next) => {
  try {
    const deleteJobReply = await JobReply.findByPk(req.params.id);

    if (!deleteJobReply) {
      res.sendStatus(400);
    } else {
      await deleteJobReply.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;