import React from "react";
import ProductList from "./components/productList/productList";
import styles from "./app.module.css";
import NavBar from "./components/navBar/navBar";
import Wrapper from "./components/hoc/wrapper";
import ProductsProvider from "./components/providers/ProductsProviders";
import Filter from "./components/filters/Filter";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Filter />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

// export default App;

export default Wrapper(App, styles.container);
