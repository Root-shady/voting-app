import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
// import Seed from './data';
import Product from './Product';

import './data.js';

class ProductList extends Component {
 
  state = {
    products: []
  }
  
  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product)=>{
      if(product.id === productId){
        return Object.assign({}, product, {votes: product.votes+1});
      }
      else{
        return product;
      }
    });
    this.setState({products: nextProducts});
  }
  
  componentDidMount() {
    this.setState({ products: window.Data });
  }

  render() {
    var products = this.state.products;
    products.sort((a, b) => (a.votes - b.votes));
    
    const productComponents = products.map((product, index) => (
      <div className="ui unstackable items" key={index}> 
      <Product
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitter_avatar_url}
        productImageUrl={product.product_image_url}
        onVote={this.handleProductUpVote}
      />
      </div>
    ));
    return (
      <div className='ui unstackable items'>
      { productComponents }
      </div>
      );
  }
}

export default ProductList;
