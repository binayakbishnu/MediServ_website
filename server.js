const express = require('express'),
    cors = require('cors'),
    dbOperation = require('./DBFiles/dbOperation'),
    API_PORT = process.env.PORT || 5000,   // port to listen
    app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post('/mainApp/show', async (req, res) => {
    console.log('Show called');
    const result = await dbOperation.showVals(req.body.name);
    res.send(result.rows);
});

app.post('/mainApp/insert', async (req, res) => {
    console.log('Insert called');
    console.log('Inserting', req.body.id_, req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    await dbOperation.insertVals(req.body.id_, req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    const result = await dbOperation.showVals('first_name', req.body.firstName);
    res.send(result.rows);
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));