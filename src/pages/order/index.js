import React from 'react';
import { useSelector } from 'react-redux';

function Order({ match }) {
  const order = useSelector((state) =>
    state.order.orders.find((o) => o.id === match.params.id)
  );
  if(!order){
    return <div>not found</div>
  }
  return <div>order by: {order.uid}</div>;
}

export default Order;
