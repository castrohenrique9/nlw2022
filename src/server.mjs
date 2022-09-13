import express from 'express'

const app = express()

app.get('/ads', () => {
    console.log('access ads!');
})

// localhost:3333/ads
app.listen(3333)
