import axios from 'axios';
const CART_API_BASE_URL = "";
class Apiservice {

    // Products
    getProducts(){
        return axios.get(CART_API_BASE_URL + 'products');
    }
    // productsID
    deleteProducts(productsID){
        return axios.delete(CART_API_BASE_URL + 'products/' + productsID);
    }
    // product 객체
    addProducts(product){
        return axios.post(CART_API_BASE_URL + 'products', product);
    }

    // Orders
    // 아직 안정함 #####
    getOrders(userID){
        return axios.get(CART_API_BASE_URL + 'orders/' + userID);
    }
    // ordersID
    deleteOrders(ordersID){
        return axios.delete(CART_API_BASE_URL + 'orders/' + ordersID);
    }
    // order 객체  ##### 객체 구성 + 전달 _id 미정
    addOrders(order){
        return axios.put(CART_API_BASE_URL + 'orders/' + order._id, order)
    }

    main(){
        return axios.get(CART_API_BASE_URL)
    }

}

export default new Apiservice();