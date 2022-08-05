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

app.post('/signUp', async (req, res) => {
    const result = await dbOperation.showVals('email', req.body.email);
    console.log(result.rows.length);
    if (result.rows.length > 0) {
        console.warn('Duplicate email address');
        res.send({ errorPresent: true, errorMessage: 'Duplicate email address' });
    } else {
        console.log('Inserting', req.body.id_, req.body.firstName, req.body.lastName, req.body.email, req.body.password);
        await dbOperation.newUserInsert(req.body.id_, req.body.firstName, req.body.lastName, req.body.email, req.body.password);
        res.send({ errorPresent: false, errorMessage: 'No error' });
    }
});
app.post('/moreDetails', async (req, res) => {
    var output = ''
    console.log('Inserting',req.body.id_, req.body.year, req.body.month, req.body.date, req.body.phoneNo, req.body.state, req.body.city, req.body.street);
    output = await dbOperation.newUserMoreDetails(req.body.id_, req.body.year, req.body.month, req.body.date, req.body.phoneNo, req.body.state, req.body.city, req.body.street);
    if (output === false) {
        res.send({ errorPresent: true, errorMessage: output });
    }
    else {
        res.send({ errorPresent: false, errorMessage: 'No error' });
    }
});


app.post('/login', async (req, res) => {
    const result = await dbOperation.loginCheck(req.body.email, req.body.password);
    console.log(result.rows.length);
    if (result.rows.length > 0) {
        console.log('Logging in:', result);
        res.send({ errorPresent: false, errorMessage: 'No error' });
    } else {
        console.warn('No user found');
        res.send({ errorPresent: true, errorMessage: 'No user found' });
    }
});

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));