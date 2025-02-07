import { useState, useEffect } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch data from API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Refreshing..." : "Refresh Data"}
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
