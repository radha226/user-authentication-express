// server.js File
const express = require('express'); // Importing express module
const mongoose = require('mongoose')
const app = express(); // Creating an express object
const port = 8001; // Setting an port for this application

const configureDB = () => {
    mongoose.connect('mongodb://localhost:27017/user-authentication', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}

// module.exports = configureDB
configureDB();
app.get('/', function (req, res) {
    res.send('we are at the root route of our server');
})
// Starting server using listen function
app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
}
else{
	console.log("Server has been started at "+port);
}
})
