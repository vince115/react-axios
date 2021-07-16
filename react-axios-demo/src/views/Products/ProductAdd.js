import React from "react";
class ProductAdd extends React.Component {
    state = {
        //productImage:"",
        productTitle: "",
        productPrice: "",
        productSummary: "",

    };
    add = (e) => {
        e.preventDefault();
        if (this.state.productTitle === "" || this.state.productPrice === "" || this.state.productSummary === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addProductHandler(this.state);
        this.setState({ productTitle: "", productPrice: "", productSummary: "" });
        this.props.history.push("/");

    };
    render() {
        return (
            <div className="ui main">
                <h2>Add Product</h2>
                <form className="ui form" onSubmit={this.add}>
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
                        <label>Product Price</label>
                        <input
                            type="text"
                            name="productPrice"
                            placeholder="Product Price"
                            value={this.state.productPrice}
                            onChange={(e) => this.setState({ productPrice: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Product Summary</label>
                        <input
                            type="text"
                            name="productSummary"
                            placeholder="Product Summary"
                            value={this.state.productSummary}
                            onChange={(e) => this.setState({ productSummary: e.target.value })}
                        />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );


    }
}
export default ProductAdd;