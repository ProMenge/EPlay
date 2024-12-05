import { Link } from 'react-router-dom'

import cart from '../../assets/images/shopping-cart.svg'
import { HeaderBar, LinkItem, Links, CartLink } from './styles'
import logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categories">Categories</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">New Arrivals</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promotion</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartLink href="#">
          0 - produto(s)
          <img src={cart} alt="cart" />
        </CartLink>
      </HeaderBar>
    </>
  )
}

export default Header
