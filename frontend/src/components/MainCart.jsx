import React, {Component} from "react";
import Fade from "react-reveal/Fade";
import {connect} from "react-redux";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import {removeFromCart} from "../actions/cartActions";
import {createOrder, clearOrder} from "../actions/orderActions";

class MainCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order_code: "",
            user_id: "",
            order_status: "",
            order_memo: "",
            showCheckout: false,
        };
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            order_code: this.state.order_code,
            user_id: this.state.user_id,
            order_status: this.state.order_status,
            order_memo: this.state.order_memo,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a, c) => a + c.p_price * c.count, 0),
        };
        this.props.createOrder(order);
    };
    closeModal = () => {
        this.props.clearOrder();
    };

    render() {
        const {cartItems, order} = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                    <div className="cart cart-header">
                        You have {cartItems.length} in the cart{" "}
                    </div>
                )}

                {order && (
                    <Modal isOpen={true} onRequestClose={this.closeModal} ariaHideApp={false}>
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>
                                x
                            </button>
                            <div className="order-details">
                                <h3 className="success-message">Your order has been placed.</h3>
                                <h2>Order {order.order_seq}</h2>
                                <ul>
                                    <li>
                                        <div>order_code:</div>
                                        <div>{order.order_code}</div>
                                    </li>
                                    <li>
                                        <div>user_id:</div>
                                        <div>{order.user_id}</div>
                                    </li>
                                    <li>
                                        <div>order_status:</div>
                                        <div>{order.order_status}</div>
                                    </li>
                                    <li>
                                        <div>order_memo:</div>
                                        <div>{order.order_memo}</div>
                                    </li>
                                    <li>
                                        <div>Total:</div>
                                        <div>{(order.total)}</div>
                                    </li>
                                    <li>
                                        <div>Cart Items:</div>
                                        <div>
                                            {order.cartItems && order.cartItems.map((x) => (
                                                <div>
                                                    {x.count} {" x "} {x.title}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Zoom>
                    </Modal>
                )}
                <div>
                    <div className="cart">
                        <Fade left cascade>
                            <ul className="cart-items">
                                {cartItems.map((item) => (
                                    <li key={item.p_seq}>
                                        <div>
                                            <img width="100px"
                                                 src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
                                                 alt={item.p_id}></img>
                                        </div>
                                        <div>
                                            <div>{item.p_name}</div>
                                            <div className="right">
                                                {(item.p_price)} x {item.count}{" "}
                                                <button
                                                    className="button"
                                                    onClick={() => this.props.removeFromCart(item)}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total:{" "}
                                        {(
                                            cartItems.reduce((a, c) => a + c.p_price * c.count, 0)
                                        )}
                                    </div>
                                    <button
                                        onClick={() => {
                                            this.setState({showCheckout: true});
                                        }}
                                        className="button primary"
                                    >
                                        Proceed
                                    </button>
                                </div>
                            </div>
                            {this.state.showCheckout && (
                                <Fade right cascade>
                                    <div className="cart">
                                        <form onSubmit={this.createOrder}>
                                            <ul className="form-container">
                                                <li>
                                                    <label>order_code</label>
                                                    <input name="order_code" type="text" required
                                                           onChange={this.handleInput}></input>
                                                </li>
                                                <li>
                                                    <label>user_id</label>
                                                    <input name="user_id" type="text" required
                                                           onChange={this.handleInput}></input>
                                                </li>
                                                <li>
                                                    <label>order_status</label>
                                                    <input name="order_status" type="text" required
                                                           onChange={this.handleInput}></input>
                                                </li>
                                                <li>
                                                    <label>order_memo</label>
                                                    <input name="order_memo" type="text" required
                                                           onChange={this.handleInput}></input>
                                                </li>
                                                <li>
                                                    <button className="button primary" type="submit">
                                                        Checkout
                                                    </button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </Fade>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        order: state.order.order,
        cartItems: state.cart.cartItems,
    }),
    {removeFromCart, createOrder, clearOrder}
)(MainCart);
