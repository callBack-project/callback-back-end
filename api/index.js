const router = require('express').Router();
module.exports = router;

// Mounts players api calls from api file on /api/players
router.use('/users', require('./users'));
router.use('/jobs', require('./jobs'));
router.use('/companies', require('./companies'));
router.use('/interview-experiences', require('./interviewExperiences'));
router.use('/job-replies', require('./jobReplies'));
router.use('/events', require('./events'));

//Anythingn not found gets a 404
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

//Export our api so we can use it on our server index file(main exit point for server)
