var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Reservartion  (DATA)
// =============================================================
var reservation = [{
        customerName: "Vaughn Marques",
        phonenumber: 123 - 456 - 758,
        customerEmail: "VM@email.com",
        customerID: 0987,
    },
    {
        customerName: "Rich",
        phonenumber: 987 - 654 - 321,
        customerEmail: "RS@email.com",
        customerID: 1234,
    },
    {
        customerName: "Megan",
        phonenumber: 555 - 555 - 5555,
        customerEmail: "ME@email.com",
        customerID: 5555,
    }
]

// Routes
// =============================================================
var tableData = [];
var waitListData = [];

// module.exports = function (req, res){

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post('/api-table', function (req, res) {
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    } else {
        waitListData.push(req.body);
        res.json(false);
    }
});

app.get("/api-table", function (req, res) {
    return res.json(tableData);
});

app.get("/api-wait", function (req, res) {
    return res.json(waitListData);
});


// app.post('/api/clear', function());

// }

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});