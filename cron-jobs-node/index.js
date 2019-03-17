function scheduleSpawn()
{

    const cron = require("node-cron");
    const express = require("express");
    const fs = require("fs");
    var monday_spawn = require('./boss_spawn/monday_spawn')
    var tuesday_spawn = require('./boss_spawn/tuesday_spawn')
    var wednesday_spawn = require('./boss_spawn/wednesday_spawn')
    var thursday_spawn = require('./boss_spawn/thursday_spawn')
    var friday_spawn = require('./boss_spawn/friday_spawn')
    var saturday_spawn = require('./boss_spawn/saturday_spawn')
    var sunday_spawn = require('./boss_spawn/sunday_spawn')

    app = express();

    // _____________________________________________________
    cron.schedule('45 23 * * Mon', () => {
        monday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Mon', () => {
        monday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Mon', () => {
        monday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Mon', () => {
        monday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Mon', () => {
        monday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Mon', () => {
        monday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Mon', () => {
        monday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Mon', () => {
        monday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    
    // _____________________________________________________
    cron.schedule('45 23 * * Tue', () => {
        tuesday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Tue', () => {
        tuesday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Tue', () => {
        tuesday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Tue', () => {
        tuesday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Tue', () => {
        tuesday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Tue', () => {
        tuesday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Tue', () => {
        tuesday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Tue', () => {
        tuesday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    // _____________________________________________________
    cron.schedule('45 23 * * Wed', () => {
        wednesday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Wed', () => {
        wednesday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Wed', () => {
        wednesday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Wed', () => {
        wednesday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Wed', () => {
        wednesday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Wed', () => {
        wednesday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Wed', () => {
        wednesday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Wed', () => {
        wednesday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

        // _____________________________________________________
    cron.schedule('45 23 * * Thu', () => {
        thursday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Thu', () => {
        thursday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Thu', () => {
        thursday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Thu', () => {
        thursday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Thu', () => {
        thursday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Thu', () => {
        thursday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Thu', () => {
        thursday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Thu', () => {
        thursday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });
        // _____________________________________________________
    cron.schedule('45 23 * * Fri', () => {
        friday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Fri', () => {
        friday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Fri', () => {
        friday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Fri', () => {
        friday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Fri', () => {
        friday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Fri', () => {
        friday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Fri', () => {
        friday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Fri', () => {
        friday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

            // _____________________________________________________
    cron.schedule('45 23 * * Sat', () => {
        saturday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Sat', () => {
        saturday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Sat', () => {
        saturday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Sat', () => {
        saturday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Sat', () => {
        saturday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Sat', () => {
        saturday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Sat', () => {
        saturday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Sat', () => {
        saturday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });
    
            // _____________________________________________________
    cron.schedule('45 23 * * Sun', () => {
        sunday_spawn(1)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 1 * * Sun', () => {
        sunday_spawn(2)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 4 * * Sun', () => {
        sunday_spawn(3)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 8 * * Sun', () => {
        sunday_spawn(4)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 11 * * Sun', () => {
        sunday_spawn(5)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 15 * * Sun', () => {
        sunday_spawn(6)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('30 18 * * Sun', () => {
        sunday_spawn(7)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

    cron.schedule('45 21 * * Sun', () => {
        sunday_spawn(8)
    }, {
        scheduled: true,
        timezone: "Europe/Rome"
    });

}

module.exports = scheduleSpawn;