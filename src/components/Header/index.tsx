import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'
import {
  CartButton,
  HeaderBar,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'
import { open } from '../../redux/cart/slice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { useState } from 'react'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cartReducer)

  const openCart = () => {
    dispatch(open())
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <HeaderBar>
        <HeaderRow>
          <div>
            <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </Hamburguer>
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
            {items.length} <span> - produto(s)</span>
            <img src={cart} alt="cart" />
          </CartButton>
        </HeaderRow>
        <NavMobile className={isMenuOpen ? 'is-open' : ''}>
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
        </NavMobile>
      </HeaderBar>
    </>
  )
}

export default Header
