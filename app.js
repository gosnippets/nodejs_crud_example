const express = require("express")
const bodyParser = require("body-parser")

// create our express app
const app = express()
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization, My-custom-header');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// route
const routes = require('./Routes/Route')
app.use('/', routes)

//start server
app.listen(3011, () => {
    console.log("Listeniing at port:3011")
}) 