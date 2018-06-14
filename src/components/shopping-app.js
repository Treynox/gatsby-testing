import React, { Component } from 'react'
import ShoppingListCounter from '../components/shoppinglistcounter'
import ShoppingForm from '../components/shoppingform'
import ShoppingList from '../components/shoppinglist'
import Tags from '../components/tags'

class ShoppingApp extends Component {
  constructor (){
    super();
    this.state = {
      shoppingItems:{},
      tags: [],
    }
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
  }

  componentDidMount() { 
    fetch('https://live-contentacms.pantheonsite.io/api/tags')
    .then(response => response.json())
    .then(data => this.setState({ tags: data.data }));
  } 

addItem(item){
  const shoppingItems = {...this.state.shoppingItems}
  const timestamp = (new Date()).getTime()
  shoppingItems[timestamp] = item ;
  this.setState({shoppingItems});
}

removeItem(key) {
  const shoppingItems = {...this.state.shoppingItems};
  delete shoppingItems[key];
  this.setState({shoppingItems});
}
toggleFav(index){
  const shoppingItems = { ...this.state.shoppingItems }
  shoppingItems[index].favor = shoppingItems[index].favor ? false:true ;
  this.setState({ shoppingItems });
}

  render() {
    return (
      <div>
          <ShoppingListCounter count={Object.keys(this.state.shoppingItems).length}/>
          <ShoppingForm addItem={this.addItem} />
          <ShoppingList items={this.state.shoppingItems} removeItem={this.removeItem} toggleFav={this.toggleFav} />       
          <Tags tags={this.state.tags} />
      </div>
    )
  }
}

export default ShoppingApp

