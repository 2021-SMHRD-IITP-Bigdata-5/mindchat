import React, {Component} from 'react';
import "../Style/Perfume.css";
import {Button} from "@material-ui/core";


class Perfume extends Component {

    render() {
        return (
            <div>
                <div>
                    <br/>
                    <h2 className="title" style={{marginTop: '30px'}}>PRODUCT PAGE</h2>
                    <br/>
                    <hr/>
                </div>


                <div className='Mains'>
                    <div id='Mains-left'>
                    </div>

                    <div style={{justifyContent: "center", display: "flex"}}>
                        <div className="pd_descbox"
                             style={{height: "470px", width: "883px", backgroundColor: "#f9f9f9"}}>
                            <div className="img_container">
                                <div>
                                    <img
                                        src="https://contents.lotteon.com/itemimage/_v225912/LE/12/00/97/82/89/_1/20/36/71/46/3/LE1200978289_1203671463_1.jpg/dims/optimize/dims/resizemc/400x400"/>
                                </div>
                            </div>
                            <div className="pd_Container">
                                <div className="product_name">
                                    <h1>Lancome Miracle Four Woman Eau de Parfum EDP 30ml</h1>
                                </div>
                                <div className="product_price">
                                    <span className="price_box">80,000원</span>
                                    <span className="price_cRed">45,900원</span>
                                </div>
                                <div className="product_id">
                                    Lancome_1
                                </div>
                                <div className="product_date">
                                    2022-03-23
                                </div>
                                <div className="product_cnt">
                                    recommendation
                                </div>
                                <div className="button_cart">
                                    <br/>
                                    <Button className="button_basket1"> ADD TO CART </Button>
                                    <br/>
                                    <Button className="button_basket2"> BUY IT NOW </Button>
                                    <br/>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div id='Mains-right'>
                        <div className="titleArea">
                            <h2>
                                <span>shopping basket</span>
                            </h2>
                        </div>

                        <div className="titleArea1">
                            <h2>
                                <img src="#"/>
                            </h2>
                        </div>

                        {/*<div>*/}
                        {/*    <h2 className="shopping_cart_number"> 1 </h2>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h2 className="Product_sequence_number"> 1 </h2>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h2 className="product_quantity">5</h2>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <h2 className="registration_date"> 2022-03-23 </h2>*/}
                        {/*</div>*/}
                        <div style={{display: "block", justifyContent: "center"}}>
                            <Button style={{width: "100%", top: "86px"}}> BUY IT NOW </Button>
                        </div>

                    </div>
                </div>
                <hr/>


                <div className="text1">
                    <button className="product_des">Product Description</button>
                    <button className="product_des">Product review</button>
                    <button className="product_des">Product Inquiry</button>
                </div>

                <div className="custom-hero">
                    <div style={{width: "860", height: "600"}}>
                        img >> 사이즈 860 * 600
                    </div>
                </div>

                <div className="col-md-12 col-xs-12">
                    <div className="lg-col-bg">
                        <img src="#" className="img-lg-col4"/>

                    </div>

                </div>

                <div>
                    <div style={{
                        display: "block", justifyContent: "center", height: "1280px",
                        backgroundColor: "#EEEEEE"
                    }}>
                        <div className="container_row">
                            <div className="row" style={{height: "50px"}}>
                                <div className="col-md-6 col-xs-6">
                                    <div className="projects_bg">
                                        <a className="btn_ltstlk" href="../components/Event.jsx"
                                           role="button"> EVENT </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <div className="projects_bg">
                                        <a className="btn_ltstlk" href="../components/Order.jsx"
                                           role="button"> ORDER</a>
                                    </div>
                                </div>

                                <div>
                                    <div className="products_reviews_list">
                                        <div className="widget_reviews">
                                            <div className="widget_header_basic">
                                                <div className="widget_title">
                                                    <div className="review">
                                                        <span> REVIEW </span>
                                                        <span>(5)</span>
                                                    </div>
                                                    <div>
                                                        <a className="review_prod">상품 리뷰 작성하기</a>
                                                        <a className="review_prod">전체 상품 리뷰보기</a>
                                                    </div>
                                                    <hr/>
                                                    <div className="sf_review_block_left">
                                                        <div className="review_user">
                                                            <span>1</span>
                                                            <span className="star">★★★★★</span>
                                                            <br/>
                                                            <span className="sf_text_overflow"> 진한 향을 좋아하는데 어떤 거 살까 고민하다가 은은하니 잔향이 좋다고 하여
                                                                <br/>
                                                                궁금해서 구매해 봤어요 아직 사용 전 이지만 샤넬 향은 다 좋은 것 같아요
                                                                <br/> 요번 신상도 구매했는데 어떤 향일지 궁금하네요 </span>
                                                            <br/>
                                                            <br/>

                                                            <span className="user_write_date">작성날짜</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>2022-03-22</span>&nbsp;&nbsp;
                                                            <span className="user_write_date">작성자</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>star_1</span>

                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="sf_review_block_left">
                                                        <div className="review_user">
                                                            <span>2</span>
                                                            <span className="star">★★★★★</span>
                                                            <br/>
                                                            <span className="sf_text_overflow">
                                                                <br/> 선물 위해 구매했는데 만족합니다. 고급스러운 모습ㅋㅋ
                                                                <br/>  </span>
                                                            <br/>
                                                            <br/>

                                                            <span className="user_write_date">작성날짜</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>2022-03-21</span>&nbsp;&nbsp;
                                                            <span className="user_write_date">작성자</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>yura_!</span>

                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="sf_review_block_left">
                                                        <div className="review_user">
                                                            <span>3</span>
                                                            <span className="star">★★★★★</span>
                                                            <br/>
                                                            <span className="sf_text_overflow">  2번째 구매인데 향이 너무좋습니다 ㅎㅎ
                                                                <br/> </span>
                                                            <br/>
                                                            <br/>

                                                            <span className="user_write_date">작성날짜</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>2022-03-20</span>&nbsp;&nbsp;
                                                            <span className="user_write_date">작성자</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>ra_1</span>

                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="sf_review_block_left">
                                                        <div className="review_user">
                                                            <span>4</span>
                                                            <span className="star">★★★★☆</span>
                                                            <br/>
                                                            <span className="sf_text_overflow">
                                                                <br/> 향이 너무 좋아서 다른 향수 사려다가 바로 구매했어요. </span>
                                                            <br/>
                                                            <br/>

                                                            <span className="user_write_date">작성날짜</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>2022-03-20</span>&nbsp;&nbsp;
                                                            <span className="user_write_date">작성자</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>f2368dd</span>

                                                        </div>
                                                    </div>
                                                    <hr/>
                                                    <div className="sf_review_block_left">
                                                        <div className="review_user">
                                                            <span>5</span>
                                                            <span className="star">★★★★☆</span>
                                                            <br/>
                                                            <span className="sf_text_overflow">예전에 친구에게 선물받아 계속 사용하다가 이번엔 제가
                                                                바로 지를만큼 편안하면서 달콤하고 향기까지 오래가니 너무 맘에 들어요...<br/>
                                                                담번엔 레드 크런트로 바꿔볼까 싶기도 합니다... <br/>
                                                                <br/> 요번 신상도 구매했는데 어떤 향일지 궁금하네요 </span>
                                                            <br/>
                                                            <br/>

                                                            <span className="user_write_date">작성날짜</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>2022-03-19</span>&nbsp;&nbsp;
                                                            <span className="user_write_date">작성자</span>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span>uw821d</span>

                                                        </div>
                                                    </div>
                                                    <hr/>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Perfume;