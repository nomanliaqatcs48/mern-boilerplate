const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('Write your cronjob here... Running in every second.');
});
