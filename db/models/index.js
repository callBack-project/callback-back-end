const User = require('./User');
const Company = require('./Company');
const Job = require('./Job');
const InterviewExperience = require('./InterviewExperience');
const Event = require('./Event');
const JobReply = require('./JobReply');
const InterviewReply = require('./InterviewReply');

//Will probably have to edit these, magic methods and foreign keys are a pain

// OneToMany
// User <- Event (EventId) // user.getEvents()
// Event (eventId) -> User // event.getUser()
User.hasMany(Event, {
  foreignKey: 'userId',
});
Event.belongsTo(User, { foreignKey: 'userId' });

// OneToMany
// User <- InterviewExperience (InterviewExperienceId) // user.getInterviewExperiences()
// InterviewExperience (InterviewExperienceId) -> User // InterviewExperience.getUser()
User.hasMany(InterviewExperience, {
  foreignKey: 'userId',
});
InterviewExperience.belongsTo(User, { foreignKey: 'userId' });

// OneToMany
// User <- InterviewReply (InterviewReplyId) // user.InterviewReplies()
// InterviewReply (InterviewReplyId) -> User // InterviewReply.getUser()
User.hasMany(InterviewReply, {
  foreignKey: 'userId',
});
InterviewReply.belongsTo(User, { foreignKey: 'userId' });

// OneToMany
// User <- Job (JobId) // user.getJobs()
// Job (JobId) -> User // Job.getUser()
User.hasMany(Job, {
  foreignKey: 'userId',
});
Job.belongsTo(User, { foreignKey: 'userId' });

// OneToMany
// User <- JobReply (JobReplyId) // user.getJobReplies()
// JobReply (JobReplyId) -> User // JobReply.getUser()
User.hasMany(JobReply, {
  foreignKey: 'userId',
});
JobReply.belongsTo(User, { foreignKey: 'userId' });

// OneToMany
// Company <- InterviewExperience (InterviewExperienceId) // Company.getInterviewExperience()
// InterviewExperience (CompanyId) -> InterviewExperience // InterviewExperience.getcompany()
Company.hasMany(InterviewExperience, {
  foreignKey: 'companyId',
});
InterviewExperience.belongsTo(Company, { foreignKey: 'companyId' });

// OneToMany
// Company <- Job (jobId) // Company.getJob()
// Job (CompanyId) -> job // job.getcompany()
Company.hasMany(Job, {
  foreignKey: 'companyId',
});
Job.belongsTo(Company, { foreignKey: 'companyId' });

// OneToMany
// Job <- JobReply (JobReplyId) // Job.getJobReplies()
// JobReply (JobReplyId) -> Job // JobReply.getJobs()
Job.hasMany(JobReply, {
  foreignKey: 'jobId',
});
JobReply.belongsTo(Job, { foreignKey: 'jobId' });

// OneToMany
// InterviewExperience <- InterviewReply (InterviewReplyId) // InterviewExperience.getInterviewReplies()
// InterviewReply (InterviewReplyId) -> InterviewExperience // InterviewReply.getInterviewExperiences()
InterviewExperience.hasMany(InterviewReply, {
  foreignKey: 'interviewId',
});
InterviewReply.belongsTo(InterviewExperience, { foreignKey: 'interviewId' });

module.exports = {
  User,
  Company,
  Job,
  InterviewExperience,
  Event,
  JobReply,
  InterviewReply,
};
