const express = require('express');
const { urlencoded, json } = require('body-parser');
const PORT = process.env.PORT || 5000;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(json())

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(process.env.MONGODB_URI || dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/auth.routes.js')(app)
require('./app/routes/task.routes.js')(app)

// listen for requests
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});