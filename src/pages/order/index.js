import React from 'react';
import { useSelector } from 'react-redux';

function Order({ match }) {
  const order = useSelector((state) =>
    state.order.orders.find((o) => o.id === match.params.id)
  );
  if (!order) {
    return <div>not found</div>;
  }
  return (
    <div>
      <p>order by: {order.uid}</p>
      {order.books.map((book) => (
        <div>{book.name}</div>
      ))}
    </div>
  );
}

export default Order;
