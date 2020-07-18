const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
};

const schema = new mongoose.Schema({ 
    name: String,
    age : String,
    gender : String,
    experience : Number,
    education : String,
    englishLevel : String,
    position : String,
    salary : Number
});

const Person = mongoose.model(
    'Person', 
    schema
);

app.use(bodyParser.json());
app.use(cors());

app.get('/people', async (req, res) => {
    const query = req.query || {};
    const result = await Person.find(query);

    res.json(result);
});

app.post('/people', async (req, res) => {
    await Person.create(req.body);
    res.send('ok');
});

app.listen(8081, async () => {

    console.log('Example app listening at 8081');

    await mongoose.connect('mongodb://localhost/stats', { useNewUrlParser: true, useUnifiedTopology: true });

    console.log('connected to db');
});

// REST principles

// GET /people - get all people
// POST /people - create person


// GET /people/:id - return concrete person
// PATCH /people/:id - edit concrete person
// DELETE /people/:id - delete concrete person