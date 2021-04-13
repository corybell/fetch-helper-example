import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing } from "services/theme"

const Root = styled.footer`
  margin: ${spacing[8]} 0 ${spacing[16]} 0;
  padding: 0;
`

const Copyright = styled.small`
  display: block;
  margin-top: ${spacing[4]};
  text-align: center;
`

const Footer = ({ siteAuthor }) => (
  <Root>
    <Copyright>
      © {new Date().getFullYear()} {siteAuthor}
    </Copyright>
  </Root>
)

Footer.propTypes = {
  siteAuthor: PropTypes.string.isRequired,
}

export default Footer
