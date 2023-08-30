import axios from 'axios'
import { useEffect, useState } from 'react'


const GetAll =  () => {
    const [books, setBooks] = useState<Array<{ name: string; discreption: string; idbooks:any }>>([]);
     
    const [newName, setNewName] = useState('')
    const [newdisc, setNewDisc] = useState('')

    useEffect(() => {
        showBooks(); 
      }, []);
      
const showBooks = async ()=>{
    try {
        const res = await axios.get("http://localhost:3000/books")
         setBooks(res.data)

    } catch (error) {
       console.error(error) 
    }
 
}
   
const deleteBook = async (idbooks:any) =>{
  console.log('Before deletion:', idbooks);
  try {
    const response = await axios.delete('http://localhost:3000/books'+idbooks); 
    console.log(response.data);
    showBooks(); 
  } catch (error) {
    console.error('Error deleting book:', error);
  }
}


const makeEditable = (element:any) => {
  element.contentEditable = true;
  element.focus();
   
 


}

const updateBook = async (idbooks:any) =>{
  try {
    
    const response = await axios.put('http://localhost:3000/books/update:' + idbooks)
    

  } catch (error) {
    console.error(error)
    
  }
 
}
 
  

return (
    <div className="getall">
        <button onClick={showBooks}>show-Books</button>
       
        <h2>Books List</h2>
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td className='name'onClick={()=> makeEditable(event?.target)}
               onChange={(event)=> {
                setNewName(event.target.value);
               }}
              >{book.name} 
              </td>

              <td className='disc' onClick={()=> makeEditable(event?.target)} 
              
              >{book.discreption}
              </td>
              
              <td key={book.idbooks}>
                <button onClick={() => updateBook(book.idbooks)}>update</button>
                <button onClick={() => deleteBook(book.idbooks)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
 </div>
  )
}

export default GetAll

