var bot = require('./bot')
var scheduleSpawn = require('./cron-jobs-node/index')
bot()
scheduleSpawn()