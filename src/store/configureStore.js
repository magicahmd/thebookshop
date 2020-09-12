import { createStore } from "redux";
import orderReducer from "./reducers/orderReducer";

export function configureStore() {
  return createStore(orderReducer);
}
