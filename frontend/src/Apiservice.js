import axios from 'axios';

const { REACT_APP_BACKEND_LOCAL_PORT } = process.env;

//  env로 옮겨서 경로 숨김

class Apiservice {
    // Products
    fetchProducts(){
        return axios.get(`${REACT_APP_BACKEND_LOCAL_PORT}/products/`);
    }
    // productsID
    deleteProducts(productsID){
        return axios.delete(REACT_APP_BACKEND_LOCAL_PORT + 'products/' + productsID);
    }
    // product 객체
    addProducts(product){
        return axios.post(REACT_APP_BACKEND_LOCAL_PORT + 'products', product);
    }

    // Orders
    // 아직 안정함 #####
    getOrders(userID){
        return axios.get(REACT_APP_BACKEND_LOCAL_PORT + 'orders/' + userID);
    }
    // ordersID
    deleteOrders(ordersID){
        return axios.delete(REACT_APP_BACKEND_LOCAL_PORT + 'orders/' + ordersID);
    }
    // order 객체  ##### 객체 구성 + 전달 _id 미정
    addOrders(order){
        return axios.put(REACT_APP_BACKEND_LOCAL_PORT + 'orders/' + order._id, order)
    }

    main(){
        return axios.get(REACT_APP_BACKEND_LOCAL_PORT)
    }

}

export default new Apiservice();