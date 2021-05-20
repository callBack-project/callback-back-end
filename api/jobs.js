const express = require('express');
const router = express.Router();
const { Job, Company } = require('../db/models');

// Express Routes for Jobs - Read more on routing at https://expressjs.com/en/guide/routing.html
router.get('/', async (req, res, next) => {
  try {
    const allJobs = await Job.findAll();
    // An if/ternary statement to handle not finding allJobs explicitly

    !allJobs
      ? res.status(404).send('Jobs Not Found')
      : res.status(200).json(allJobs);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleJob = await Job.findOne({ where: { id: req.params.id } });
    // An if/ternary statement to handle not finding singleJob explicitly
    !singleJob
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(singleJob);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newJob = await Job.create(req.body);

    const company = await Company.findOne({
      where: {
        name: newJob.company,
      },
    });
    console.log('Company', company);

    await newJob.setCompany(company);
    // An if/ternary statement to handle not finding newJob explicitly
    !newJob
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(newJob);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateJob = await Job.findByPk(req.params.id);
    updateJob.update(req.body);

    // An if/ternary statement to handle not finding updateJob explicitly
    !updateJob
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(updateJob);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleteJob = await Job.findByPk(req.params.id);
    deleteJob.destroy();

    // An if/ternary statement to handle not finding deleteJob explicitly
    !deleteJob
      ? res.status(404).send('Users Not Found')
      : res.status(200).json(deleteJob);
  } catch (error) {
    next(error);
  }
});

// Export our router, so that it can be imported to construct our api routes
module.exports = router;
