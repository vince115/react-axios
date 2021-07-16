import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import api from "../../api/products";
import "../../components/App.css";
import LinkMenu from "../../components/LinkMenu";

import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ProductEdit from "./ProductEdit";

//function Proudcts() {
const Proudcts = () => {
  const LOCAL_STORAGE_KEY = "products";
  const [products, setProducts] = useState([]);

  //RetrieveProducts
  const retrieveProducts = async () => {
    const response = await api.get("/products");
    return response.data;
  };

  const addProductHandler = async (product) => {
    console.log(product);
    const request = {
      id: uuidv4(),
      ...product,
    };

    const response = await api.post("/products", request);
    console.log(response);
    setProducts([...products, response.data]);
  };

  const updateProductHandler = async (product) => {
    const response = await api.put(`/products/${product.id}`, product);
    const { id, productTitle, productPrice , productSummary } = response.data;
    setProducts(
        products.map((product) => {
        return product.id === id ? { ...response.data } : product;
      })
    );
  };

  const removeProductHandler = async (id) => {
    await api.delete(`/products/${id}`);
    const newProductList = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(newProductList);
  };

  useEffect(() => {
    
    const getAllProducts = async () => {
      const allProducts = await retrieveProducts();
      if (allProducts) setProducts(allProducts);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
   
  }, [products]);

  return (
    <>
    <LinkMenu />
    <div className="ui container">
      <Router >
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ProductList
                {...props}
                products={products}
                getProductId={removeProductHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <ProductAdd {...props} addProductHandler={addProductHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <ProductEdit
                {...props}
                updateProductHandler={updateProductHandler}
              />
            )}
          />

          <Route path="/product/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default Proudcts;