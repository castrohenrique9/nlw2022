import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    response.json([
        { id: 1, name: 'Ads 1' },
        { id: 2, name: 'Ads 3' },
        { id: 3, name: 'Ads 3' }
    ])
})

// localhost:3333/ads
app.listen(3333)
