import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'
import { CartButton, HeaderBar, LinkItem, Links } from './styles'
import { open } from '../../redux/cart/slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cartReducer)

  const openCart = () => {
    dispatch(open())
  }

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
        <CartButton onClick={openCart} href="#">
          {items.length} - produto(s)
          <img src={cart} alt="cart" />
        </CartButton>
      </HeaderBar>
    </>
  )
}

export default Header
