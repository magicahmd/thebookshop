import { asyncActionError, asyncActionFinish, asyncActionStart } from '../../async/asyncReducer';
import {
  CREATE_ORDER,
  DELETE_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
} from '../constants/orderConstants';

export function loadOrders() {
  return async function(dispatch){
    dispatch(asyncActionStart());
    try{
      const orders = [
        {
          id: '1',
          uid: 56535,
          books: [
            {
              name: 'Nichijou',
              price: 40,
            },
            {
              name: 'Req Queen',
              price: 60,
            },
          ],
        },
        {
          id: '2',
          uid: 77777,
          books: [
            {
              name: 'Attack on Titan Vol 7',
              price: 40,
            },
          ],
        },
        {
          id: '3',
        }
      ];
      dispatch({type: FETCH_ORDERS, payload: orders}  );
      dispatch(asyncActionFinish());
    }
    catch(error){
      dispatch(asyncActionError());
    }
  }
}

export function createOrder(order) {
  return {
    type: CREATE_ORDER,
    payload: order,
  };
}

export function updateOrder(order) {
  return {
    type: UPDATE_ORDER,
    payload: order,
  };
}

export function deleteOrder(orderId) {
  return {
    type: DELETE_ORDER,
    payload: orderId,
  };
}
