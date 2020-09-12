import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  dataFromSnapshot,
  getOrdersFromFirestore,
} from '../../firestore/firestoreService';

function OrdersDashboard() {
  useEffect(() => {
    const unsubscribe = getOrdersFromFirestore({
      next: (snapshot) =>
        console.log(
          snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
        ),
      error: (error) => console.log(error),
    });
    return unsubscribe;
  });

  const { orders } = useSelector((state) => state.order);

  return (
    <div>
      <h1>Orders page</h1>
      {orders.map((order) => (
        <div key={order.id}>
          <Link to={`/orders/${order.id}`}>order {order.id}</Link>
        </div>
      ))}
    </div>
  );
}

export default OrdersDashboard;
