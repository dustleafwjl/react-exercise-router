import React from 'react'
import {Link} from 'react-router-dom';
import productData from '../../mockups/data.json'

class Product extends React.Component{
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({ products: productData});
  }

  render() {
    return (
      <div>
        <h3>All Products</h3>
        {
          Object.keys(this.state.products).map(key => <div>
            <Link style={{
              color: "red"
            }} to={`/products/${this.state.products[key].id}`}>{key}</Link>
          </div>)
        }
      </div>
    )
  }
}

export default Product;