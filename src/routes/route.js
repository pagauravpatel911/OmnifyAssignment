const express = require('express');
const router = express.Router();
//const aws = require("aws-sdk")


const userController = require("../controller/userController")
const  scheduleController = require("../controller/scheduleController")
const middlewere = require("../middlewere/auth")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// user
router.post('/register', userController.createUser);
router.get("/loginUser", userController.login);

/// schedule

router.post("/schedule",middlewere.authorization, scheduleController.createSchedule)

module.exports = router;