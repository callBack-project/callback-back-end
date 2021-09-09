const express = require('express');
const router = express.Router();
// eslint-disable-next-line no-unused-vars
const { JobReply, Job, User } = require('../db/models');

//GET ALL JOB REPLIES
router.get('/', async (req, res, next) => {
  try {
    const allJobReplies = await JobReply.findAll();

    !allJobReplies ? res.sendStatus(404) : res.status(200).send(allJobReplies);
  } catch (error) {
    next(error);
  }
});

// GET ALL JOBS REPLIES WHERE THE ID MATCHES JOB POSTS
router.get('/:jobsId', async (req, res, next) => {
  try {
    const allJobReplies = await JobReply.findAll({
      where: {
        jobId: req.params.jobsId
      }
    });

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
    // console.log('newJobReply :>> ', newJobReply);
    console.log(req.query);
    console.log('newJobReply :>> ', newJobReply);


    // Only if passed in via req.query
    // eslint-disable-next-line no-warning-comments
    // TODO: Figure out how to get it from the session or req.user
    // const user = await User.findOne({
    //   where: {
    //     id: req.query.id,
    //   },
    // });

    // await newJobReply.setUser(user);
    // await newJobReply.setJob(job);
    // await newJobReply.set(user)

    // const job = Job.findByPk({
    //   where: { id: '05ca5a54-4b4c-4fdf-865b-c46d2c386db3' },
    // });

    // job.setJobReplies(newJobReply);

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
