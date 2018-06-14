import React from 'react'
import Link from 'gatsby-link'

const recipesPages = ({ data }) => {
    return (
        <div>
            <ul>
                {data.allRecipes.edges.map(({ node }) =>
                    <li key={node.id}>{node.title} <br/> <Link to={node.fields.slug}>HERE</Link> </li>
                )}
            </ul>
        </div>
    )
}

export default recipesPages

export const query = graphql`
  query RecipesQuery {
    allRecipes(limit: 10) {
      edges {
        node {
          id
          title
          fields {
            slug
          }
        }
      }
    }
  }
`