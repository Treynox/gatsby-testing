import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class ShoppingCounter extends Component {
  render() {
    const count = this.props.count;
    return (
      <div>
      <FontAwesome name='shopping-cart' /> {count}
      </div>
    )
  }
}
export default ShoppingCounter