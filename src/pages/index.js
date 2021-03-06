import React from 'react'
import Link from 'gatsby-link'
import SayMyName from '../components/saymyname'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Look at this James.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <SayMyName path='/page-2'/>
  </div>
)

export default IndexPage
