import {
  CREATE_ORDER,
  DELETE_ORDER,
  UPDATE_ORDER,
} from '../constants/orderConstants';

const initialState = {
  orders: [
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
  ],
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

    default:
      return state;
  }
}
