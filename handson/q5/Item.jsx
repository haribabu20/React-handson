import {useState, useEffect} from 'react'


const Item = () => {

  const [items, setItem] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [number, setNumber] = useState(0)

  const fetchUser = async (number) => {
    setLoading(true)
    try{
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
      if(!response.ok){
        throw new Error('Invalid Request')
      }
      const data = await response.json();
      setItem(data)
      setLoading(false)
    }catch(error){
      setError("Error Occured due to: " + error)
    }
 }

 const fetch = useEffect(()=>{
  fetchUser(number)
 },[number])

 console.log(items)

  return(
    <div>
      <div>Enter Number to fetch the user title: </div>
      <input type='number' onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={fetch}>Fetch</button>

      {error && <p>Error: {error}</p>}
      {loading && <p>Loading....</p>}
      <ul>
        {
          items.map((item)=>(
            <li key={item.id}>{item.title}</li>
          ))
        }
      </ul>
    
    </div>
  )
}

export default Item

