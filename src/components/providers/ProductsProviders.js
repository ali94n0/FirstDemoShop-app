import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();
// const initialState = [
//   { title: "javascript", price: "19$", id: 1, quantity: 2 },
//   { title: "reactjs", price: "29$", id: 2, quantity: 1 },
//   { title: "nodejs", price: "40$", id: 3, quantity: 5 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const updatedProducts = state.filter((p) => p.id !== action.id);
      return updatedProducts;
    }
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const pro = { ...state[index] };
      pro.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = pro;
      return updatedProducts;
    }
    case "decrement":
      const index = state.findIndex((item) => item.id === action.id);
      const pro = { ...state[index] };
      if (pro.quantity === 1) {
        const updatedProducts = state.filter((p) => p.id !== action.id);
        return updatedProducts;
      } else {
        pro.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = pro;
        return updatedProducts;
      }

    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const pro = { ...state[index] };
      pro.title = action.event.target.value;

      const updatedProducts = [...state];
      updatedProducts[index] = pro;
      return updatedProducts;
    }
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "descending") {
        const sortedProducts = _.orderBy(products, ["price"], ["asc"]);
        return sortedProducts;
      } else {
        const sortedProducts = _.orderBy(products, ["price"], ["desc"]);
        return sortedProducts;
      }
    }
    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const searchedProduct = state.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return searchedProduct;
      }
    }
    default:
      return state;
  }
};
const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);
  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);

export const useProductsAction = () => useContext(ProductsContextDispatcher);

//   const deleteHandler = (id) => {
//     const updatedProducts = products.filter((p) => p.id !== id);
//     setProducts(updatedProducts);
//   };
//   const incrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const pro = { ...products[index] };
//     pro.quantity++;
//     const updatedProducts = [...products];
//     updatedProducts[index] = pro;
//     setProducts(updatedProducts);
//   };
//   const decrementHandler = (id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const pro = { ...products[index] };
//     const updatedProducts = [...products];
//     console.log(updatedProducts);

//     if (pro.quantity === 1) {
//       const updatedProducts = products.filter((p) => p.id !== id);
//       setProducts(updatedProducts);
//     } else {
//       pro.quantity--;
//       const updatedProducts = [...products];
//       updatedProducts[index] = pro;
//       setProducts(updatedProducts);
//     }
//   };
//   const changedHandler = (event, id) => {
//     const index = products.findIndex((item) => item.id === id);
//     const pro = { ...products[index] };
//     pro.title = event.target.value;

//     const updatedProducts = [...products];
//     updatedProducts[index] = pro;

//     setProducts(updatedProducts);
//   };
