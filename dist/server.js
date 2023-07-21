"use strict";
exports.__esModule = true;
// server.ts
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var nodemailer_1 = require("nodemailer");
var app = express_1["default"]();
var PORT = 3000;
app.use(cors_1["default"]());
app.use(body_parser_1["default"].json());
// Replace with your email configuration
var transporter = nodemailer_1["default"].createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'MyLecturesProject2023@gmail.com',
        pass: 'Itsik1234Esti'
    }
});
app.post('/forgot-password', function (req, res) {
    var email = req.body.email;
    // In a real-world app, you would validate the email, check if it exists in the database, and generate a unique reset token.
    // For demonstration purposes, we'll simply send a reset link for any email received.
    var resetLink = "https://your-app.com/reset-password?email=" + email;
    var mailOptions = {
        from: 'MyLecturesProject2023@gmail.com',
        to: email,
        subject: 'איפוס סיסמה',
        html: "\n      <p>\u05D1\u05E7\u05E9\u05EA\u05DA \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4.</p>\n      <p>\u05D4\u05E7\u05E9 \u05E2\u05DC \u05D4\u05DC\u05D9\u05E0\u05E7 \u05D4\u05DE\u05E6\u05D5\u05E8\u05E3 \u05DC\u05D0\u05D9\u05E4\u05D5\u05E1 \u05E1\u05D9\u05E1\u05DE\u05D4:</p>\n      <a href=\"" + resetLink + "\">" + resetLink + "</a>\n    "
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Failed to send email' });
        }
        else {
            console.log('Email sent:', info.response);
            res.json({ message: 'Email sent successfully' });
        }
    });
});
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
