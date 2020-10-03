import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listenToOrdersFromFirestore } from '../../firestore/firestoreService';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';
import { listenToOrders } from '../../store/actions/orderActions';

function OrdersDashboard() {
  const dispatch = useDispatch();

  useFirestoreCollection({
    query: () => listenToOrdersFromFirestore(),
    data: (orders) => dispatch(listenToOrders(orders)),
    deps: [dispatch],
  });

  const { loading } = useSelector((state) => state.async);
  const { orders } = useSelector((state) => state.order);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Orders page</h1>
      {orders.map((order, index) => (
        <div key={index}>
          <Link to={`/orders/${order.id}`}>order {order.id}</Link>
        </div>
      ))}
    </div>
  );
}

export default OrdersDashboard;
