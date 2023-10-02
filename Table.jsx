import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
      .then((response) => {
        const ordersData = response.data.dasbhoardPage.orders;
        setOrders(ordersData);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Moving":
        return "green";
      case "Cancelled":
        return "red";
      case "Pending":
        return "yellow";
      default:
        return "black";
    }
  };

  return (
    <div >
    <div style={{width:'89%',backgroundColor:'#435c70',marginLeft:'5rem',paddingTop:'60px'}}>
      <h2 style={{marginLeft:'3rem',paddingTop:'60px'}}>Orders</h2>
      <table style={{width:'92%',marginLeft:'3rem'}}>
        <thead>
          <tr>
            <th style={{textAlign:'center'}}>Order No</th>
            <th style={{textAlign:'center'}}>Start Date</th>
            <th style={{textAlign:'center'}}>Delivery Date</th>
            <th style={{textAlign:'center'}}>Distance</th>
            <th style={{textAlign:'center'}}>Location</th>
            <th style={{textAlign:'center'}}>Operators</th>
            <th style={{textAlign:'center'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td style={{textAlign:'center'}}>{order.orderNo}</td>
              <td style={{textAlign:'center'}}>{order.startDate}</td>
              <td style={{textAlign:'center'}}>{order.deliveryDate}</td>
              <td style={{textAlign:'center'}}>{order.distance}</td>
              <td style={{textAlign:'center'}}>{order.location}</td>
              <td style={{textAlign:'center'}}>{order.operators}</td>
              <td>
                <div
                  style={{
                    backgroundColor: getStatusColor(order.status),
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "5px",
                    textAlign:'center'
                  }}
                ></div>
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
