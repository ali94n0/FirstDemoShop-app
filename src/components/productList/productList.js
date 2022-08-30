import Product from "../product/product";
import { useProducts, useProductsAction } from "../providers/ProductsProviders";
import React from "react";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsAction();
  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product in cart</div>;

    return products.map((product, index) => {
      return (
        <Product
          product={product}
          key={index}
          clicked={() => dispatch({ type: "remove", id: product.id })}
          incremented={() => dispatch({ type: "increment", id: product.id })}
          decremented={() => dispatch({ type: "decrement", id: product.id })}
          changedName={(e) =>
            dispatch({ type: "edit", id: product.id, event: e })
          }
        />
      );
    });
  };
  return (
    <div>
      {!products.length && <div>go to shopping</div>}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
