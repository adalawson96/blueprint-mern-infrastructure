
// import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { useState, useEffect } from 'react';
import * as ordersAPI from '../../utilities/orders-api';

export default function OrderHistoryPage(){
  const [cart, setCart] = useState([]);

  useEffect (function() {
    async function orderHistory() {
      const orderHistory = await ordersAPI.getOrderHistory();
      setCart(orderHistory);
    }
    orderHistory();
  }, [])
  return(
    <>
      <h1>OrderHistory Page</h1>
      {cart.map(order => {
        return <h1>{ order._id }</h1>
      })}
    </>
  )
}