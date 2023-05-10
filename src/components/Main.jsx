import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
export const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/hodlinfo/get-top-10"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  let i = 0;
  return (
    <div className="bg-dark" style={{ fontFamily: "sans-serif" }}>
      <div className="table-responsive">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Platform</th>
              <th scope="col">Last Traded Price</th>
              <th scope="col">Buy / Sell Price</th>
              <th scope="col">volume</th>
              <th scope="col">base_unit</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td scope="row">{++i}</td>
                <td>{item.name}</td>
                <td>₹ {item.last}</td>
                <td>
                  ₹ {item.buy} / ₹ {item.sell}
                </td>
                <td className="text-info">{item.volume}</td>
                <td className="text-info">{item.base_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
