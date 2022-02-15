const express = require('express')
const router = express.Router()
const controller = require('../../controllers/schedule')

router.get("/events ", async (req, res, next) => {
    const result = await controller.list()
    res.status(result.status).send(result.data)
})

router.get("/get/:id", async (req, res, next) => {
    const result = await controller.get(req.params.id)
    res.status(result.status).send(result.data)
})

router.post("/create", async (req, res, next) => {
    const result = await controller.create(req.body)
    res.status(result.status).send(result.data)
})

router.patch("/update", async (req, res, next) => {
    const result = await controller.update(req.body)
    res.status(result.status).send(result.data)
})

router.delete("/delete/:id", async (req, res, next) => {
    const result = await controller.delete(req.params.id)
    res.status(result.status).send(result.data)
})

module.exports = router