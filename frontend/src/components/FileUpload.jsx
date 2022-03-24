import React, {useState} from 'react';
import Dropzone from 'react-dropzone'
import {PlusOutlined} from "@ant-design/icons";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8082';


function FileUpload() {

    const [Images, setImages] = useState([])


    /* 파일전송할때! formData랑 같이 보내줘야함 안그럼 에러남 */
    /* 백앤드에서 파일을 저장하고 프론트로 넘김*/
    /* then >> 정보전달 ! */
    /* /api/product/image Server에 index.js*/

    const dropHandler = (files) =>{

        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data'}
        }
        formData.append("files", files[0])

        axios.post('/img/upload', formData, config)
            .then(response => {
                if(response != null) {
                    setImages([...Images, response.data.filePath])
                }else{
                    alert('파일을 저장하는데 실패했습니다.')
                }
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={dropHandler} >
                {({ getRootProps, getInputProps }) => (
                    <div
                        style={{
                            width: 300, height: 240, border: '1px solid lightgray',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                        {...getRootProps()}>
                        <input {...getInputProps()} />
                        <PlusOutlined  type="plus" style={{ fontSize: '3rem' }} />
                    </div>
                )}
            </Dropzone>
        </div>
    );
}

export default FileUpload;