import React, { Component } from 'react';

export class Cart extends Component {
    render() {
        const { cartItems } = this.props
        console.log(cartItems);
        return (
            <div className="card text-white bg-info mb-3" style={{ maxWidth: '20rem' }}>
                <div className="card-header">سبد خرید </div>
                {
                    cartItems.length === 0 ? "سبد خرید خالی است " :
                        <div>
                            <span>تعداد  محصولات سبد خرید </span>{cartItems.length}
                        </div>
                }
                {
                    cartItems.length > 0 &&
                    <div>
                        <ul>
                            {
                                cartItems.map(it =>
                                    <li>
                                        <div className="card-body">
                                            <span className="card-title">{it.name}</span>
                                            <span>
                                                <button
                                                    className="btn btn-denger"
                                                    onClick = { (e) => this.props.handelRemoveCart(e, it)}
                                                >حذف</button>
                                            </span>
                                            <span className="card-text float-left">{it.address.number}</span>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                        <div>
                            <span>مجموع</span> {cartItems.reduce((a, b) => a + b.address.number * b.count, 0)} تومان
                        </div>
                    </div>
                }

            </div>
        );
    }
}

export default Cart;
