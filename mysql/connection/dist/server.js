"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mysql2_1 = require("mysql2");
var cors_1 = require("cors");
var app = express_1["default"]();
var port = 3000;
app.use(express_1["default"].json());
app.use(cors_1["default"]());
var connection = mysql2_1["default"].createConnection({
    host: 'localhost',
    user: 'root',
    password: '0524045460',
    database: 'test',
    port: 3306
});
connection.connect();
// ----------------------------------------------------------------
app.get('/books', function (req, res) {
    var book = 'Select * from books';
    connection.query(book, function (err, data) {
        if (err)
            return res.json('no books found');
        return res.json(data);
    });
});
app.post('/books', function (req, res) {
    try {
        var _a = req.body, name = _a.name, discreption = _a.discreption;
        var sql = 'INSERT INTO books (name, discreption) VALUES (?, ?)';
        connection.query(sql, [name, discreption], function (err, data) {
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).send('Error inserting data');
            }
            else {
                console.log('Data inserted successfully');
                res.status(200).send('Data inserted successfully');
            }
        });
    }
    catch (error) {
        console.error(error);
    }
});
app["delete"]('/books:id', function (req, res) {
    try {
        var idbooks = req.params.id;
        var sql = 'DELETE FROM books WHERE idbooks= ?';
        console.log(idbooks);
        connection.query(sql, [idbooks], function (err, data) {
            if (err)
                return res.json(err);
            return res.json('book has been deleted');
        });
    }
    catch (error) {
        console.error(error);
    }
});
app.put('/books/update:id', function (req, res) {
    var idbooks = req.params.id;
    var name = req.body.name;
    var disc = req.body.discreption;
    console.log(req.body);
    var sql = "UPDATE books SET name = " + name + ", discreption = " + disc;
    connection.query(sql, [name, disc], function (err, data) {
        if (err)
            console.log(err);
    });
});
app.listen(port, function () {
    console.log('listening on port 3000');
});
