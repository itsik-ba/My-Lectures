import express, { Request, Response } from 'express';
import "./DB/db"

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('./client'));




app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });