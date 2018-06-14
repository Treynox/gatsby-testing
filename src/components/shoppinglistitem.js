import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class ShoppingListItem extends Component {
  render() {
    const name = this.props.name;
    const quantity = this.props.quantity;
    const favorState = this.props.favor ? 'heart':'circle';

    return (
      <li>
           {name} - {quantity} - <br/>
           <button className="remove-item" onClick={() => this.props.removeItem(this.props.index)}> <FontAwesome name='times' />  </button>
           
           <button className="favor-item" onClick={() => this.props.toggleFav(this.props.index)}><FontAwesome name={favorState} /></button>
           
      </li>
    )
  }
}
export default ShoppingListItem