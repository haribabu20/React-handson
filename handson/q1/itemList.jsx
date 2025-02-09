import { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]); // Stores fetched items
  const [loading, setLoading] = useState(false); // Tracks loading state
  const [limit, setLimit] = useState(""); // Stores user input for the number of items
  const [error, setError] = useState(""); // Stores error message (if any)

  // Function to fetch data based on user input
  const fetchData = async () => {
    if (!limit || limit <= 0) {
      setError("Please enter a valid number greater than 0");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    }
    
    setLoading(false);
  };

  // Function to reset the list
  const resetList = () => {
    setItems([]);
    setLimit("");
    setError("");
  };

  return (
    <div>
      <h2>Item List</h2>

      {/* Input for user to enter the number of items */}
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        placeholder="Enter number of items"
      />
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Data"}
      </button>
      <button onClick={resetList}>Reset</button>

      {/* Display error if any */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display the fetched items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
