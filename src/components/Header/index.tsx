import { HeaderBar, LinkItem, Links, CartLink } from './styles'
import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <div>
          <img src={logo} alt="EPLAY" />
          <nav>
            <Links>
              <LinkItem>
                <a href="#">Categories</a>
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
