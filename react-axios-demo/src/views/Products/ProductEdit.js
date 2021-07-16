import React from "react";

class ProductEdit extends React.Component {
  constructor(props) {
    super(props);
    const { id, productTitle, productPrice, productSummary } = props.location.state.product;
    this.state = {
      id,
      productTitle, 
      productPrice, 
      productSummary,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.productTitle === "" || this.state.productPrice === "" || this.state.roductSummary === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateProductHandler(this.state);
    this.setState({ productTitle: "", productPrice: "", productSummary: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Product</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Product Title</label>
            <input
              type="text"
              name="productTitle"
              placeholder="Product Title"
              value={this.state.productTitle}
              onChange={(e) => this.setState({ productTitle: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="productPrice"
              placeholder="Product Price"
              value={this.state.productPrice}
              onChange={(e) => this.setState({ productPrice: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default ProductEdit;
