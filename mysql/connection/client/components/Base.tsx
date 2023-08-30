import axios from "axios";

const Base =  () => {

  const addNewBook = async (event:any)=>{
    event.preventDefault(); 
      const name = event.target.name.value;
      const disc = event.target.disc.value;
     console.log(name);
     console.log(disc);
      try {
        const response = await axios.post('http://localhost:3000/books', { name, discreption: disc }); 
        console.log(response.data);
        console.log(name, disc);
      } catch (error) {
        console.error(error);
      }

  }

  return (
    <div>
        <form onSubmit={addNewBook}>
      <input type="text" name="name" placeholder='add book name'/>
      <input type="text" placeholder='add description' name="disc"/>
      <button type='submit'>add</button>
       </form>
       
      </div>
  )
}

export default Base