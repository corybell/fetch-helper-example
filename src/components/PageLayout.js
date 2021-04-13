import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "components/CssBaseline"
import Nav from "components/Nav"
import Footer from "components/Footer"
import { maxWidth, spacing } from "services/theme"

const Container = styled.div`
  width: 100%;
  margin: 4.5rem auto 0 auto;
  max-width: ${maxWidth.container};
  padding: 1rem ${spacing[8]};
  z-index: 0;
  background-color: #eaeaea;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { title, author } = data.site.siteMetadata

  return (
    <CssBaseline>
      <Nav siteTitle={title} />
      <Container>
        <main>{children}</main>
        <Footer siteAuthor={author} />
      </Container>
    </CssBaseline>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
