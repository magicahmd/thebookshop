import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { dataFromSnapshot, getOrdersFromFirestore } from '../../firestore/firestoreService';

function Orders() {
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
  return <div>
      <h1>Orders page</h1>
      <div>
        <Link to="/orders/1">
            order 1
        </Link>
      </div>
      <div>
        <Link to="/orders/2">
            order 2
        </Link> 
      </div>

  </div>;
}

export default Orders;
