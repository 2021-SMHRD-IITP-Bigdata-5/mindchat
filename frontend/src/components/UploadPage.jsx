import React, {Component, useState} from 'react';
import {Typography, Button, Form, Input } from "antd";
import FileUpload from "../components/Utils/FileUpload";
import * as Continents from "react-bootstrap/ElementChildren";
import Order from "./Order";


const { TextArea } = Input;


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

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    const [Images, setImages] = useState([])


    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value)
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value)
    }

    const priceChangeHandler = (event) => {
        setPrice(event.currentTarget.value)
    }

    const continentChangeHandler  = (event) => {
        setContinent(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }


    return (
        <div style={{maxWidth: '1000px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <h2> 베스트 상품 업로드</h2>
            </div>

            <Form>

                {/* DropZone 라이브러리를 이용!  FileUpload에 파일이 들어가면 연동*/}
                {/* 드롭존에서 파일을 올리면 백앤드에 전달(보낸파일을 저장!- multer 필요!)*/}
                <FileUpload />

                <br/>
                <br/>
                <label>이름</label>
                <Input onChange={titleChangeHandler} value={Title}/>
                <br/>
                <br/>
                <label>설명</label>
                <TextArea onChange={descriptionChangeHandler} value={Description}/>
                <br/>
                <br/>
                <label>가격($)</label>
                <Input type="number" onChange={priceChangeHandler} value={Price}/>
                <br/>
                <br/>
                <select onChange={continentChangeHandler}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}> {item.value}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <Button type="submit">
                    확인
                </Button>


            </Form>


        </div>
    );
}

export default UploadPage;
