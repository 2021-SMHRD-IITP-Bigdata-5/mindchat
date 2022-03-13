import React, {useState} from 'react';
import axios from 'axios';
const { REACT_APP_BACKEND_LOCAL_PORT }= process.env;


//backend 통신정상확인
const testcompo =()=> {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [products, setProducts] = useState(null);
    const onClick = () =>{
        axios.get(`${REACT_APP_BACKEND_LOCAL_PORT}/product/test2`)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data[0]);
            })
            .catch((error)=>{
                console.log(error);
            });
    }
        return (
            <div>
                <h1>test</h1>
                <div>
                    <button onClick={onClick}>버튼</button>
                    {JSON.stringify(products, null, 2 )}
                </div>
            </div>
        );

};
export default testcompo;
