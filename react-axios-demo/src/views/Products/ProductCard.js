import React from "react";
import { Link } from "react-router-dom";
//import user from "../../images/user.png";

const ProductCard = (props) => {
  const { id,  productTitle,  productPrice, productSummary } = props.product;
  return (
    <div className="item">
     
      <div className="content">
        <Link
          to={{ pathname: `/product/${id}`, state: { product: props.product } }}
        >
          <div><img src="https://picsum.photos/64/64/?random"></img></div>
          <div className="header">{productTitle}</div>
          <div>{productPrice}</div>
          <div>{productSummary}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { product: props.product } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default ProductCard;