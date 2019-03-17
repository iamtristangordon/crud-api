let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

app.get('/', (req, res) => res.send('Hello World with Express'));

let mllRoutes = require("./mll-routes");

app.use('/api', mllRoutes);

app.listen(port, function () {
     console.log("Running mll-api on port " + port);
});