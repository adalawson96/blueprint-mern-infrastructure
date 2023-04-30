import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';
import { Link } from 'react-router-dom';

export default function OrderHistoryPage(){
  const [cart, setCart] = useState([]);

  useEffect (function() {
    async function getOrderHistory() {
      const orderHistory = await ordersAPI.getOrderHistory();
      setCart(orderHistory);
    }
    getOrderHistory();
  }, [])
  return(
    <>
      <Link to="/orders/new" className="btn"> Create New Order </Link>
        <h1>Order History Page</h1>
      <div className="orderHistory">
        {cart.map(order => {
          let displayDate = new Date(order.createdAt).toLocaleDateString()
          return (
            <>
              <h3>Order Id: {order._id}</h3>
              <h3>Date: {displayDate} </h3>
              <h3>Total: {order.orderTotal} </h3>
            </>
          )
        })}
      </div>
    </>
  );
}