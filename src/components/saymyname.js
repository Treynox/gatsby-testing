import React, { Component } from 'react'
import Link from 'gatsby-link'
import { navigateTo } from 'gatsby-link'

class SayMyName extends Component {
  constructor(props){
    super(props);
    this.addName = this.addName.bind(this);
    //const path = props.path;
  }
  addName(){
    alert(this.firstName.value);
    navigateToTo(this.props.path)
  }
  render() {
    return (
      <form onSubmit={() => this.addName()}>
        <input type='text' placeholder='First Name' ref={(input) => {this.firstName = input}}/><br/>
        <input type='text' placeholder='Last Name' ref={(input) => {this.lastName = input}}/> <br/>
        <button type='submit'>Say Name</button> <br/>
        <Link to={this.props.path}>Page 2</Link>
      </form>
    )
  }
}
export default SayMyName