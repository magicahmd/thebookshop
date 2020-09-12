import { CREATE_ORDER, DELETE_ORDER, UPDATE_ORDER } from '../constants/orderConstants';

export function createOrder(order) {
	return {
        type: CREATE_ORDER,
        payload: order
	};
}

export function updateOrder(order) {
	return {
        type: UPDATE_ORDER,
        payload: order
	};
}

export function deleteOrder(orderId) {
	return {
        type: DELETE_ORDER,
        payload: orderId
	};
}
