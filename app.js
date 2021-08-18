const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({ message: 'Hello' })
})

app.listen(3434, () => {
    console.log('Application listening on port 3434!')
})