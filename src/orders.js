import React, {useEffect} from 'react';
import { dataFromSnapshot, getOrdersFromFirestore } from './firestore/firestoreService';

function Orders() {
    useEffect(() => {
        const unsubscribe = getOrdersFromFirestore({
            next: snapshot => console.log(snapshot.docs.map(docSnapshot =>  dataFromSnapshot(docSnapshot))),
            error: error => console.log(error) 
        });
        return unsubscribe;
    });
  return (
    <div className="App">
      The Bookshop
    </div>
  );
}

export default Orders;
