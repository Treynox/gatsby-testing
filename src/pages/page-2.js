import React from 'react'
import Link from 'gatsby-link'
import ShoppingApp from '../components/shopping-app'

const SecondPage = () => (
  <div>
    <Link to="/">Go back to the homepage</Link>
    <ShoppingApp/>
  </div>
)

export default SecondPage
