import React, {Component, useState} from 'react';
import {Typography, Button, Form, Input} from "antd";
import FileUpload from "./FileUpload";
import * as Continents from "react-bootstrap/ElementChildren";
import Order from "./Order";


const {TextArea} = Input;


function UploadPage(props) {

    let Continents = [
        {key: 1, value: "Musk"},
        {key: 2, value: "Aromatic"},
        {key: 3, value: "Woody"},
        {key: 4, value: "Citrus"},
        {key: 5, value: "Oriental"},
        {key: 6, value: "Honey"},
        {key: 7, value: "Spicy"}
    ]
    const [Continent, setContinent] = useState(1)

    const [p_id, setP_id] = useState(0)

    const [p_name, setP_name] = useState(0)

    const [p_stock_cnt, setP_stock] = useState(0)

    const [p_desc, setP_desc] = useState(0)

    const [p_date, setP_date] = useState(0)

    const [p_reco_cnt, setP_reco_cnt] = useState(0)

    const [p_price, setP_price] = useState(0)

    const [p_discount_ratio, setP_discount] = useState(0)

    const [admin_id, setAdmin_id] = useState(0)

    const onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
    }

    function createProductList() {
        const productInfo = {

        }

    }


    return (
        <div style={{
            display       : "table",
            maxWidth      : "1000px",
            margin        : "2rem auto",
            justifyContent: "center"
        }}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h2> 베스트 상품 업로드</h2>
            </div>

            <Form>

                {/* DropZone 라이브러리를 이용!  FileUpload에 파일이 들어가면 연동*/}
                {/* 드롭존에서 파일을 올리면 백앤드에 전달(보낸파일을 저장!- multer 필요!)*/}
                <FileUpload/>
                <br/>
                <br/>
                <label>상품아이디</label>
                <Input onChange={onChangeHandler} id={"p_id"} name={"p_id"}/>
                <br/>
                <br/>
                <label>상품이름</label>
                <Input onChange={onChangeHandler} id={"p_name"} name={"p_name"}/>
                <br/>
                <br/>
                <label>재고수량</label>
                <Input onChange={onChangeHandler} id={"p_stock_cnt"} name={"p_stock_cnt"}/>
                <br/>
                <br/>
                <label>상품설명</label>
                <Input onChange={onChangeHandler} id={"p_desc"} name={"p_desc"}/>
                <br/>
                <br/>
                <label>상품등록일자</label>
                <Input onChange={onChangeHandler} id={"p_date"} name={"p_date"}/>
                <br/>
                <br/>
                <label>상품추천수</label>
                <Input onChange={onChangeHandler} id={"p_reco_cnt"} name={"p_reco_cnt"}/>
                <br/>
                <br/>
                <label>상품가격</label>
                <Input onChange={onChangeHandler} id={"p_price"} name={"p_price"}/>
                <br/>
                <br/>
                <label>상품할인율</label>
                <TextArea onChange={onChangeHandler} id={"p_discount_ratio"} name={"p_discount_ratio"}/>
                <br/>
                <br/>
                <label>관리자아이디</label>
                <TextArea onChange={onChangeHandler} id={"admin_id"} name={"admin_id"}/>
                <br/>
                <br/>
                <select onChange={continentChangeHandler}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <Button onClick={continentChangeHandler}>
                    registration
                </Button>


            </Form>


        </div>
    );
}

export default UploadPage;