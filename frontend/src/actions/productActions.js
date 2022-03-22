import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_BY_CATEGORY, ORDER_PRODUCTS_BY_PRICE } from "../types";

const { REACT_APP_BACKEND_LOCAL_PORT } = process.env;
export const getProducts = () => async (dispatch) => {
  const res = await fetch(`${REACT_APP_BACKEND_LOCAL_PORT}/product/list `);
  const data = await res.json();

  console.log("겟프로덕트데이터",data);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      items:
          category === ""
              ? products
              : products.filter((x) => x.p_cat.indexOf(category) >= 0),
    },
  });
};
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a.p_seq > b.p_seq ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
        sort === "lowest"
            ? a.p_price > b.p_price
                ? 1
                : -1
            : a.p_price > b.p_price
                ? -1
                : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
