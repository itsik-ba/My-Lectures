import express from 'express';
import mysql from 'mysql2'
import cors from 'cors'

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0524045460',
    database: 'test', 
    port: 3306, 
  });
connection.connect();
// ----------------------------------------------------------------


app.get('/books', (req, res)=>{
    const book = 'Select * from books'
    connection.query(book, (err,data)=>{
        if(err) return res.json('no books found')
        return res.json(data);
    
    })
})


app.post('/books', (req, res)=>{
    try {
        const {name, discreption} = req.body
         
        const sql = 'INSERT INTO books (name, discreption) VALUES (?, ?)';
         
        connection.query(sql, [name, discreption], (err,data)=>{
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).send('Error inserting data');
              } else {
                console.log('Data inserted successfully');
                res.status(200).send('Data inserted successfully');
              }
        })
    } catch (error) {
       console.error(error) 
    }
   
})

app.delete('/books:id', (req, res)=>{
  try {
    const idbooks = req.params.id;
    const sql = 'DELETE FROM books WHERE idbooks= ?';
    console.log(idbooks);
    connection.query(sql,[idbooks], (err,data)=>{
      if(err) return res.json(err)
      return res.json('book has been deleted')
    })
  } catch (error) {
    console.error(error)
  }
})

 app.put('/books/update:id', (req, res)=>{
  const idbooks = req.params.id;
  const name = req.body.name;
  const disc = req.body.discreption;
  console.log(req.body)
  const sql = `UPDATE books SET name = ${name}, discreption = ${disc}`
   connection.query(sql, [name, disc], (err,data)=>{
    if(err) console.log(err);
   })


 })

 

app.listen(port, () =>{
 console.log('listening on port 3000');
})