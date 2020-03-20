import React, { Component } from 'react';
import Shop from './component/Shop'
import Cart from './component/Cart';
import Heder from './component/Heder';
import About from './component/About';
import Contact from './component/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ToDo from './component/ToDo';
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      cartItems: []
    }
    this.handelAddToCart = this.handelAddToCart.bind(this)
    this.handelRemoveCart = this.handelRemoveCart.bind(this)
  }
  componentWillMount() {
    fetch('https://jsonplaceholder.ir/users')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))
    if (localStorage.getItem('cartItems')) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem('cartItems'))
      })
    }
  }

  handelAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems
      let productExiste = false
      cartItems.forEach(item => {
        if (item.id === product.id) {
          productExiste = true
          item.count++
        }
      })
      if (!productExiste) {
        cartItems.push({ ...product, count: 1 })
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return cartItems
    })
  }
  handelRemoveCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(p => p.id !== item.id)
      localStorage.setItem('cartItems', cartItems)
      return { cartItems }
    })

  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Heder />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-lg-3 ">
                <Cart cartItems={this.state.cartItems}
                  handelRemoveCart={this.handelRemoveCart}
                />
              </div>
              <div className="col-sm-9 col-md-9 col-lg-9 ">
                <Route exact path="/" cp>
                <Shop
                  products={this.state.products}
                  handelAddToCart={this.handelAddToCart}
                />
                </Route>
                <Route exact path="/todo" component={ToDo} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
