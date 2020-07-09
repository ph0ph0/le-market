import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    siteMetadata: allFile(filter: { relativePath: { eq: "site.json" } }) {
      edges {
        node {
          childContentJson {
            site {
              siteTitle
              siteTagline
              siteUrl
              siteIcon
              siteImage {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
              copyright
              menu {
                name
                link
              }
            }
          }
        }
      }
    }
  }
`

export function useSiteMetadata() {
  const data = useStaticQuery(query)
  return data.siteMetadata.edges[0].node.childContentJson.site
}