import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listenToOrderFromFirestore } from '../../firestore/firestoreService';
import useFirestoreDoc from '../../hooks/useFirestoreDoc';
import { listenToOrders } from '../../store/actions/orderActions';

function Order({ match }) {
  const dispatch = useDispatch();
  const order = useSelector((state) =>
    state.order.orders.find((o) => o.id === match.params.id)
  );
  const { loading } = useSelector((state) => state.async);
  useFirestoreDoc({
    query: () => listenToOrderFromFirestore(match.params.id),
    data: (order) => dispatch(listenToOrders([order])),
    deps: [match.params.id],
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>not found</div>;
  }
  return (
    <div>
      <p>order by: {order.uid}</p>
      {order.books.map((book, index) => (
        <div key={index}>{book.name}</div>
      ))}
    </div>
  );
}

export default Order;
