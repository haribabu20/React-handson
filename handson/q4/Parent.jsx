import React, { useState } from "react";
import Child from "./Child"; // Import Child Component

const Parent = () => {
  const [count, setCount] = useState(0); // State in Parent

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <Child counter={count} /> {/* Passing state as props */}
    </div>
  );
};

export default Parent;
