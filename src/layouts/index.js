import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
//import './index.css'
import { css } from 'glamor'
import './fontawsome/css/fontawesome-all.min.css'


const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subTitle} />
    <div
      css={{
        margin: `0 auto`,
        maxWidth: `960px`,
      }}
    >
      {children()}
    </div>
    <Footer email="email@email.com"></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title,
        subTitle,
      }
    }   
  }  
`
