import firebase from '../config/firebase';

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) {
    return undefined;
  }
  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }
  return {
    ...data,
    id: snapshot.id,
  };
}

export function listenToOrdersFromFirestore() {
  return db.collection('orders');
}

export function listenToOrderFromFirestore(orderId) {
  return db.collection('orders').doc(orderId);
}

export function addOrderToFirestore(order) {
  return db.collection('orders').add({
    ...order,
    createdAt: new Date(),
    books: firebase.firestore.FieldValue.arrayUnion({
      id: 1,
      name: 'attacks',
    }),
    createdBy: 'Ahmad',
  });
}

export function updateOrderInFirestore(order) {
  return db.collection('orders').doc(order.id).update(order); 
}
