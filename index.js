const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const app = express();


let database 
let kitchen
let bathroom
let appliance
let landscape
var bathroomRouter = require('./routes/bathroom');
var kitchenRouter = require('./routes/kitchen');
let landscapeRouter = require('./routes/landscape');
let indexRouter = require('./routes/index');

let connectionString = "mongodb://127.0.0.1:27017/dillman_personal_library?retryWrites=truew=majority"; //<--------database new connect string from your database


mongoose.connect(connectionString)
    .then(

        () => {
            console.log('Connection Successful');


        }

    )
    .catch(
        (error) => {
            console.log('An error has occurred: ', error);
        });









app.use('/', indexRouter);



/*

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HIVE', 'index.html'))
});
*/
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
MongoClient.connect(
    connectionString,
    { useNewUrlParser: true},
    (err, client) => {
        if (err) throw err;
        database = client.db(); //<--------------- put database name in para
        kitchen = database.collection('')//<------ collection names in here
        bathroom = database.collection('')//<------ collection names in here
        applicance = database.collection('')//<------ collection names in here
        landscape = database.collection('')//<------ collection names in here
        

    }
)
    console.log('Server Running')
})


module.exports = app; 