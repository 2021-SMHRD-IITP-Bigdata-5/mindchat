import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "../types";


const { REACT_APP_BACKEND_LOCAL_PORT } = process.env;
export const createOrder = (order) => (dispatch) => {
    fetch(` ${ REACT_APP_BACKEND_LOCAL_PORT }/order/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            dispatch({ type: CREATE_ORDER, payload: data });
            localStorage.clear("cartItems");
            dispatch({ type: CLEAR_CART });
        });
};
export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER });
};
export const fetchOrders = () => (dispatch) => {
    fetch("/order/list")
        .then((res) => res.json())
        .then((data) => {
            dispatch({ type: FETCH_ORDERS, payload: data });
        });
};
