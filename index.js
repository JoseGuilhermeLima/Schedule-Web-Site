const express = require('express')
const app = express()
const port = 3000

const router = require('./router/index')
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();
})

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Welcome! Schedule API')
})
app.listen(port, () => {
    console.log(`Schedule API listening on port ${port}`)
})
