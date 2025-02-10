import React, { useEffect, useState } from "react";

const Print = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchNetamt = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/netamt");
        const data = await res.json();
        // Set the data directly since it's already an array
        setItems(data);
        console.log("Fetched data:", data); // Debug log
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNetamt();
  }, []);

  useEffect(() => {
    // Calculate total whenever items change
    const newTotal = items.reduce((sum, item) => sum + (item.netamt || 0), 0);
    setTotal(newTotal);
    console.log("Current items:", items); // Debug log
    console.log("Calculated total:", newTotal); // Debug log
  }, [items]);

  return (
    <div className="flex justify-end mt-10 w-[90%] gap-7">
      <button className="px-3 text-[20px] p-3 rounded-[7px] border border-gray-300 font-bold">
        Print
      </button>
      <div className="border text-[20px] p-3 bg-green-200 rounded-[10px]">
        Total: {total.toLocaleString()}Rs
      </div>
    </div>
  );
};

export default Print;