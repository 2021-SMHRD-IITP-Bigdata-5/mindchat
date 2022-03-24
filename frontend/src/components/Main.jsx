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
import Filter from "../components/Filter";
import MainCart from "./MainCart";
import "../Style/list.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        }
    }

    componentDidMount() {
        // action 호출 !
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
            <div><br/>
                <nav className="navbar" style={{paddingLeft:'15px'}}>
                    <div><h3>MIND CHAT</h3></div>
                    <ul className="n-list">
                        <li><Link to="/perfume">Perfume &nbsp;</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Cart" style={{paddingLeft:'0px'}}>Mypage</Link></li>
                        <li><Link to="/Event">Event</Link></li>
                        <li><Link to="/FAQ" style={{paddingLeft:'0px'}}>FAQ</Link></li>
                    </ul>
                </nav>
                <section>
                    <h1 className='mainshow'>New Season, New Scent</h1>
                    <br></br>
                    <h4> Perfume blends with one's unique scent <br></br>To create attractive silence</h4>  
                    
                </section>

                <div className="main_text0">
                    <h3>BEST COLLECTION</h3>
                    <div className="contents1">What is your flavor?</div>
                </div>

                <div style={{width: '100%', margin: '3ream auto', textAlign: '-webkit-center'}}>

                    {/* 상품 정렬 코드 시작*/}
                    <Filter/>
                    {/*필터 컴포넌트*/}
                    <div>
                        <Fade>
                            {/*CSS 페이드효과*/}
                            {!this.props.products ? (
                                // 프롭스 프로덕트 유무 체크후 없다면 로딩표시 , 있다면 뿌려준다. 삼항연산자
                                <div>Loading...</div>
                            ) : (
                                <ul className="products">
                                    {this.props.products.map((product) => (
                                        // 프롭스 프로덕트 product map 함수 >> product 돌면서 업데이트
                                        <li key={product.p_seq}>
                                            {/*map 함수에서 앨리먼트 안정적 고유성을 위해 key값 부여! 고유성이므로 p_seq */}
                                            <div className="product">
                                                <a
                                                    href={"#" + product.p_seq}
                                                    onClick={() => this.openModal(product)}
                                                >
                                                    {/* 해당 상품 온클릭 모달 오픈 */}
                                                    <img width="300px"
                                                        src="assets/imageEZIwwEYG3Y8CPNbrDSKmAo11GtMJV1d5.jpg"
                                                        alt={product.p_id}/>
                                                    {/*ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ*/}
                                                    {/*이미지 크기 및 src 가데이터 >> 수정 필요 */}
                                                    <p>{product.p_name}</p>
                                                </a>
                                                <div className="product-price">
                                                    <div>{(product.p_price)}</div>
                                                    <button
                                                        onClick={() => this.props.addToCart(product)}
                                                        className="button primary"
                                                    >
                                                        {/* 해당 상품 온클릭 프롭스 addToCart 디스패치 >> 카트 리듀서 */}
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
                            // JS 연산자 조건부 랜더링  TRUE && EXP >> EXP 랜더 , FALSE && EXP >> FALSE 랜더
                            <Modal isOpen={true} onRequestClose={this.closeModal} ariaHideApp={false}>
                                {/* 모달 체크하고 클로즈 모달 실행 */}
                                <Zoom>
                                    <button className="close-modal" onClick={this.closeModal}>
                                        x
                                    </button>
                                    <div className="product-details">
                                        <img width="300px" src="assets/imageEZIwwEYG3Y8CPNbrDSKmAo11GtMJV1d5.jpg"
                                             alt={product.p_id}/>
                                        <div className="product-details-description">
                                            <p>
                                                <strong>{product.p_id}</strong>
                                            </p>
                                            <p>{product.p_name}</p>
                                            <p>
                                                주문 가능 수량 :{" "}
                                                {product.p_stock_cnt}
                                                <span>
                                              {" "}
                                            </span>
                                            </p>
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
                    <MainCart/>

                    <div style={{justifyContent: 'center'}}>

                        <Button variant="outlined">더보기</Button>
                    </div>

                </div>
            </div>

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