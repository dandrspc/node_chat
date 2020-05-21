const express = require('express')
const router = express.Router()

var app = express()
const PORT = process.env.PORT || 3000
app.use(router)

router.get('/message', function (req, res) {
    res.send('Message List')
})

router.post('/message', function (req, res) {
    res.send('Message Added')
})

app.listen(PORT, function () {
    console.log('Server is listening at http://localhost:3000')
})