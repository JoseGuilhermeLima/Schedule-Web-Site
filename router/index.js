const express = require("express")
const router = express.Router()
const scheduleRoutes = require("./routes/schedule")

router.use('/schedule', scheduleRoutes)

module.exports = router