import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    response.send('Access ads!')
})

// localhost:3333/ads
app.listen(3333)
