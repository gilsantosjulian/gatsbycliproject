import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from '../styles/components'

const logoImg = 'https://i.postimg.cc/6q3pg48v/Logo.png'
const cartImg = 'http://i.postimg.cc/L6wpMxLt/cart.png'

const Header = () => (
  <StyledHeader>
    <Link to='/'>
      <img 
        src={logoImg}
        alt='logo swag'
      />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to='/'>Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <a href='http://www.platzi.com'>Platzi</a>
        </MenuItem>
        <MenuItem>
          <Link to='/cart'>
            <span>
              <img 
                src={cartImg}
                alt='cartLogo' 
              />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
