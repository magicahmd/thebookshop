import {
  CREATE_ORDER,
  DELETE_ORDER,
  FETCH_ORDERS,
  UPDATE_ORDER,
} from '../constants/orderConstants';

const initialState = {
  orders: []
};

export default function orderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
        orders: [...state.orders, payload],
      };
    case UPDATE_ORDER:
      return {
        ...state,
        orders: [
          ...state.orders.filter((order) => order.id !== payload.id),
          payload,
        ],
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: [...state.orders.filter((order) => order.id !== payload.id)],
      };
    case FETCH_ORDERS:
      return {
        ...state,
        orders: payload,
      };

    default:
      return state;
  }
}
