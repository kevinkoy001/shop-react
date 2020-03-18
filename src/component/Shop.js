import React, { Component } from 'react';

export class Shop extends Component {
    render() {
        const item = this.props.products.map(product =>
            <div className="col-md-3 text-center product" key={product.id}>
                <img className="img-fluid" src={product.avatar}></img>
                <div>
                    <p>{product.name}</p>
                    <p>{product.address.number}</p>
                    <button onClick={(e) => this.props.handelAddToCart(e, product)} className="btn btn-success">خرید </button>
                </div>
            </div>
        )
        return (
            <div className="row">
                {item}
            </div>
        );
    }
}

export default Shop;
