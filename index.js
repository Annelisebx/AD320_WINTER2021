const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {

    res.statuscode = 200;
    res.send('hello is this doing anything?')
    res.end(console.log(`Listening on port ${PORT}`))
})

app.get('/fruits', (req, res) => {
    const PATH = '/fruit'
    res.send(`<h1>This is my fruit</h1><p>Would you like some?????</P>`)
    res.end(console.log(`Listening on port ${PORT} & path ${PATH}`))

})

app.listen(PORT);