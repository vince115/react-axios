import React from "react";
import { Link } from "react-router-dom";
//import user from "../../images/user.jpg";

const ProductDetail = (props) => {
  const { productTitle, productPrice, productSummary } = props.location.state.product;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">

        </div>
        <div className="content">
          <div className="description"><img src="https://picsum.photos/256/256/?random"></img></div>
          <div className="header">{productTitle}</div>
          <div className="description">{productPrice}</div>
          <div className="description">{productSummary}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Product List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;