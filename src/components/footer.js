import React from 'react'
import Link from 'gatsby-link'

const Footer = ({email}) => {
    return (
        <div>
            <p>Footer</p>
            <p>{email}</p>
        </div>
    )
  }

export default Footer