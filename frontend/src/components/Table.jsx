import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { useNavigate } from 'react-router-dom'

const Table = () => {

  const navigate = useNavigate()

  const handleAddClick = () => {
    navigate('/edit')
  }

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/items");
        const data = await res.json();
        setItems(data.items || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-10 max-w-[90%] overflow-hidden rounded-lg shadow-lg border border-gray-300">
        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-white text-black">
              <th className="border border-gray-300 px-6 py-3 rounded-tl-lg">
                No
              </th>
              <th className="border border-gray-300 px-6 py-3">Item Code</th>
              <th className="border border-gray-300 px-6 py-3">Product</th>
              <th className="border border-gray-300 px-6 py-3">Quantity</th>
              <th className="border border-gray-300 px-6 py-3">MRP</th>
              <th className="border border-gray-300 px-6 py-3 rounded-tr-lg">
                Net Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((i, index) => (
                <tr
                  key={index}
                  className="bg-white text-black even:bg-gray-100 text-center"
                >
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {i.itemCode}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {i.product}
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-center cursor-pointer group">
                    <HiPencilAlt onClick={handleAddClick} className="text-2xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
                    {i.quantity}
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-center cursor-pointer group">
                    <HiPencilAlt onClick={handleAddClick} className="text-2xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" />
                    ₹{i.mrp}
                  </td>
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    ₹{i.netamt}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;