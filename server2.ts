import express, { Request, Response } from 'express';
var mysql2 = require('mysql2');
import dotenv from "dotenv";
dotenv.config();
import "./DB/db"

const app = express();
const port = 3306;
app.use(express.json());
app.use(express.static('./client'));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });