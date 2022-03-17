import React, {Component} from 'react';
import "../Style/main.css";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import {getProducts} from "../actions/productActions";
import {connect} from "react-redux";
import {addToCart} from "../actions/cartActions";
import axios from "axios";
import Apiservice from "../Apiservice";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        }
    }

    componentDidMount() {
        // Apiservice.fetchProducts().then(r => {console.log(r)} );
        // console.log("젭알...");
        // this.setState({product: getProducts()});
        // console.log("stateproduct", this.state.product);
        this.props.getProducts();
    };


    openModal = (product) => {
        this.setState({product});
    };
    closeModal = () => {
        this.setState({product: null});
    };

    render() {
        const {product} = this.state;
        return (
            <>
                <nav className="navbar">
                    <div>MIND CHAT</div>
                    <ul className="n-list">
                        <li><Link to="/perfume">Perfume></Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Order">Order</Link></li>
                        <li><Link to="/Cart">Cart</Link></li>
                        <li><Link to="/Event">event</Link></li>
                        <li><Link to="/FAQ">FAQ</Link></li>
                    </ul>
                </nav>
                <section>
                    <h1 className='mainshow'>
                        It smells great
                    </h1>
                    <h4> Expectaion
                        Predetermined resentments
                    </h4>
                </section>

                <div className="main_text0">
                    <h3>BEST COLLECTION</h3>
                    <div className="contents1">나만 알고싶은 설레는 향</div>
                </div>


                <div style={{width: '100%', margin: '3ream auto', textAlign: '-webkit-center'}}>


                    {/* Filter */}

                    {/* Search */}

                    {/* Cards*/}

                    {/*이미지 부분*/}
                    {/*<ImageList sx={{width: '80%', height: '500', margin: '30px', alignItems: 'center'}}>*/}
                    {/*    {itemData.map((item) => (*/}
                    {/*        <ImageListItem key={item.img}>*/}
                    {/*            <img*/}
                    {/*                src={`${item.img}?w=248&fit=crop&auto=format`}*/}
                    {/*                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}*/}
                    {/*                alt={item.title}*/}
                    {/*                loading="lazy"*/}
                    {/*            />*/}
                    {/*            <ImageListItemBar*/}
                    {/*                title={item.title}*/}
                    {/*                subtitle={<span>by: {item.author}</span>}*/}
                    {/*                position="below"*/}
                    {/*            />*/}
                    {/*        </ImageListItem>*/}
                    {/*    ))}*/}
                    {/*</ImageList>*/}

                    <div>
                        <Fade>
                            {!this.props.products ? (
                                <div>Loading...</div>
                            ) : (
                                <ul className="products">
                                    {this.props.products.map((product) => (
                                        <li key={product.p_seq}>
                                            <div className="product">
                                                <a
                                                    href={"#" + product.p_seq}
                                                    onClick={() => this.openModal(product)}
                                                >
                                                    <img
                                                        src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
                                                        alt={product.p_id}/>
                                                    <p>{product.p_id}</p>
                                                </a>
                                                <div className="product-price">
                                                    <div>{(product.p_price)}</div>
                                                    <button
                                                        onClick={() => this.props.addToCart(product)}
                                                        className="button primary"
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Fade>
                        {product && (
                            <Modal isOpen={true} onRequestClose={this.closeModal} ariaHideApp={false}>
                                <Zoom>
                                    <button className="close-modal" onClick={this.closeModal}>
                                        x
                                    </button>
                                    <div className="product-details">
                                        <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f"
                                             alt={product.p_id}/>
                                        <div className="product-details-description">
                                            <p>
                                                <strong>{product.p_id}</strong>
                                            </p>
                                            <p>{product.p_name}</p>
                                            {/*                  <p>*/}
                                            {/*                      Avaiable Sizes:{" "}*/}
                                            {/*                      {product.p_id.map((x) => (*/}
                                            {/*                          <span>*/}
                                            {/*  {" "}*/}
                                            {/*                              <button className="button">{x}</button>*/}
                                            {/*</span>*/}
                                            {/*                      ))}*/}
                                            {/*                  </p>*/}
                                            <div className="product-price">
                                                <div>{(product.p_price)}</div>
                                                <button
                                                    className="button primary"
                                                    onClick={() => {
                                                        this.props.addToCart(product);
                                                        this.closeModal();
                                                    }}
                                                >
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            </Modal>
                        )}
                    </div>


                    <div style={{justifyContent: 'center'}}>

                        <Button variant="outlined">더보기</Button>
                    </div>


                </div>
            </>
        );
    }
}

export default connect(
    (state) => ({products: state.products.filteredItems}),
    {
        getProducts,
        addToCart,
    }
)(Main);