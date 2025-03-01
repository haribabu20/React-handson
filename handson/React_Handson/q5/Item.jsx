import {useState, useEffect} from 'react'


const Item = () => {

  const [items, setItem] = useState(null) //Use `null` instead of an array
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [number, setNumber] = useState('') // Store user input

  const fetchUser = async (number) => {

    if(!number){
      setError("Please enter a valid number ! ");
      return;
    }

    setLoading(true)
    setError("") // Clear previous errors
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      if(!response.ok){
        throw new Error('Invalid Request')
      }
      const data = await response.json();
      setItem(data);
    }catch(error){
      setError("Error Occured due to: " + error.message)
    } finally {
      setLoading(false)
    }
 }

// when should not assign variable to useEffect as it will not return anything.

  return(
    <div>
      <div>Enter Number to fetch the user title: </div>
      <input type='number' value={number} onChange={(e)=>setNumber(parseInt(e.target.value, 10) || '')}/> 
      <button onClick={()=>fetchUser(number)}>Fetch</button>

      {error && <p>Error: {error}</p>}
      {loading && <p>Loading....</p>}
      {
        items && (
          <ul>
            <li key={items.id}>{items.title}</li>
          </ul>          
        )
      }

    
    </div>
  )
}

export default Item



