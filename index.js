const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/suidaQuest');

const routes = require('./routes/routes');

app.use('/suidaQuestAPI', routes)
