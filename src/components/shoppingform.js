import React, { Component } from 'react'


class ShoppingForm extends Component {
  constructor(){
    super();
    this.addShoppingItem = this.addShoppingItem.bind(this);
  }
  addShoppingItem(event){
    event.preventDefault();
    const shoppingItem = {name: this.product.value, quantity: this.qty.value };
    //console.log(shoppingItem);
    this.props.addItem(shoppingItem);
    this.from.reset();
  }
  render() {
    return (
      
      <form ref={(input) =>{this.from = input}} onSubmit={this.addShoppingItem}>
        <input type='text' placeholder='Product Name' ref={(input) => {this.product = input}}/>
        <input type='text' placeholder='Qty' size='3' ref={(input) => {this.qty = input}}/>
        <button type='submit'>Add Item</button>
      </form>  
      
    )
  }
}
export default ShoppingForm