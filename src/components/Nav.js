import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { color, spacing, maxWidth, breakpoints } from "services/theme"
import { linkAnimation } from "services/mixin"

const Root = styled.nav`
  width: 100%;
  height: 4.5rem;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);
`

const Flex = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${maxWidth.container};
  padding: 0 ${spacing[8]};
  width: 100%;
  direction: column;
`

const LogoListItem = styled(Link)`
  display: block;
  min-width: max-content;
  width: max-content;
  margin: auto 0 auto -0.55rem;
  @media (max-width: ${breakpoints.phone}) {
    display: none;
  }
`
const Spacer = styled.div`
  flex-grow: 1;
  @media (max-width: ${breakpoints.phone}) {
    display: none;
  }
`

const Logo = styled.div`
  margin: 0;
  width: 100%;
`

const NavLink = styled(Link)`
  display: inline-block;
  position: relative;
  color: ${color.headingBlack};
  margin: auto 0;
  padding-bottom: ${spacing[3]};
  margin-left: ${spacing[8]};
  @media (max-width: ${breakpoints.phone}) {
    margin-left: 0;
    margin-right: ${spacing[8]};
  }
  ${linkAnimation}
`

const Nav = ({ siteTitle }) => (
  <Root>
    <Flex>
      <LogoListItem to="/">
        <Logo>
          <StaticImage
            src="../images/logo.svg"
            width={160}
            alt="logo"
            loading="eager"
          />
        </Logo>
      </LogoListItem>
      <Spacer />
      <NavLink to="/" activeClassName="active">
        GET
      </NavLink>
      <NavLink to="/post/" activeClassName="active">
        POST
      </NavLink>
      <NavLink to="/put/" activeClassName="active">
        PUT
      </NavLink>
    </Flex>
  </Root>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: "",
}

export default Nav
