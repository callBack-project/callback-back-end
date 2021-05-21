const express = require('express');
const router = express.Router();
const { Company } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allCompanies = await Company.findAll();

    !allCompanies
      ? res.status(404).send('Companies Not Found')
      : res.status(200).json(allCompanies);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleCompany = await Company.findByPk(req.params.id);

    !singleCompany
      ? res.status(404).send('Company Not Found')
      : res.status(200).json(singleCompany);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newCompany = await Company.create(req.body);

    !newCompany
      ? res.status(404).send('Company Not Found')
      : res.status(200).json(newCompany);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updateCompany = await Company.findByPk(req.params.id);
    updateCompany.update(req.body);

    !updateCompany
      ? res.status(404).send('Company Not Found')
      : res.status(200).json(updateCompany);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleteCompany = await Company.findByPk(req.params.id);
    deleteCompany.destroy();

    !deleteCompany
      ? res.status(404).send('Company Not Found')
      : res.status(200).json(deleteCompany);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
