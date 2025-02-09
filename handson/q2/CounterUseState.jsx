import {useState} from 'react'

const CounterUseState = () => {

  const [count, setCount] = useState(0)

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>reset</button>
    </div>
  )
}

export default CounterUseState