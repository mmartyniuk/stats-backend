const express = require('express');
const app = express();
const mongoose = require('mongoose');

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

app.get('/people', async (req, res) => {
    const result = await Person.find();

    res.json(result);
})

app.post('/people', (req, res) => {
    res.send('Hello World');
})

app.listen(8081, async () => {
    console.log("Example app listening at 8081")

    await mongoose.connect('mongodb://localhost/stats', { useNewUrlParser: true, useUnifiedTopology: true });

    console.log("connected to db")
})

// REST principles

// GET /people - get all people
// POST /people - create person


// GET /people/:id - return concrete person
// PATCH /people/:id - edit concrete person
// DELETE /people/:id - delete concrete person