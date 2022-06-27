const express = require('express'),
    cors = require('cors');


const API_PORT = process.env.PORT || 5000;   // port to listen
const app = express();

app.use(cors());

app.get('/api', function (req, res) {
    console.log('Called');
    res.send({ result: 'Hello' });
})
app.get('/quit', function (req, res) {
    console.log('Quit');
    res.send({ result: 'Bye' });
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));