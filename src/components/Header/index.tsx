import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import cart from '../../assets/images/shopping-cart.svg'
import * as S from './styles'
import { HashLink } from 'react-router-hash-link'

import { open } from '../../redux/cart/slice'
import { RootState } from '../../redux/root-reducer'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cartReducer)

  const openCart = () => {
    dispatch(open())
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span />
              <span />
              <span />
            </S.Hamburguer>
            <Link title="Voltar para página Home" to="/">
              <h1>
                <img src={logo} alt="EPLAY" />
              </h1>
            </Link>
            <nav>
              <S.Links>
                <S.LinkItem>
                  <Link
                    title="Clique aqui para acessar a página de categorias"
                    to="/categories"
                  >
                    Categorias
                  </Link>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de Em Breve "
                    to="/#coming-soon"
                  >
                    Em Breve
                  </HashLink>
                </S.LinkItem>
                <S.LinkItem>
                  <HashLink
                    title="Clique aqui para acessar a seção de promoções "
                    to="/#on-sale"
                  >
                    Promoções
                  </HashLink>
                </S.LinkItem>
              </S.Links>
            </nav>
          </div>
          <S.CartButton role="button" onClick={openCart}>
            {items.length} <span> - produto(s)</span>
            <img src={cart} alt="cart" />
          </S.CartButton>
        </S.HeaderRow>
        <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
          <S.Links>
            <S.LinkItem>
              <Link
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a página de categorias"
                to="/categories"
              >
                Categorias
              </Link>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a seção de Em Breve "
                to="/#coming-soon"
              >
                Em Breve
              </HashLink>
            </S.LinkItem>
            <S.LinkItem>
              <HashLink
                onClick={() => setIsMenuOpen(false)}
                title="Clique aqui para acessar a seção de promoções "
                to="/#on-sale"
              >
                Promoções
              </HashLink>
            </S.LinkItem>
          </S.Links>
        </S.NavMobile>
      </S.HeaderBar>
    </>
  )
}

export default Header
