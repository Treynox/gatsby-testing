import React, { Component } from 'react'
import ShoppingListItem from '../components/shoppinglistitem'


class ShoppingList extends Component {
  constructor() {
    super();
    this.removeShoppingItem = this.removeShoppingItem.bind(this);
    this.toggleFav = this.toggleFav.bind(this);

  }
  removeShoppingItem(key) {
    this.props.removeItem(key);
  }
  toggleFav(key) {
    this.props.toggleFav(key);
  }
  render() {
    return (
      <ul>
        {
          Object
            .keys(this.props.items)
            .map(item => <ShoppingListItem toggleFav={this.toggleFav} favor={this.props.items[item].favor} name={this.props.items[item].name} quantity={this.props.items[item].quantity} key={item} index={item} removeItem={this.removeShoppingItem}/>)
        }
      </ul>
    )
  }
}
export default ShoppingList