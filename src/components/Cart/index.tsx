import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/root-reducer'

import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

import { getTotalPrice } from '../../utils/index'
import { close, remove } from '../../redux/cart/slice'
import { systemTagIdentifier, categoryTagIdentifier } from '../../utils/index'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cartReducer)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const removeGame = (id: number) => {
    dispatch(remove(id))
  }

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }
  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.CartItem key={item.id}>
              <img src={item.media.thumbnail} />
              <div>
                <h3>{item.name}</h3>
                <Tag tag={categoryTagIdentifier(item)}>
                  {' '}
                  {item.details.category}
                </Tag>
                <Tag tag={systemTagIdentifier(item)}>
                  {' '}
                  {item.details.system}
                </Tag>
                <span>{parseToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeGame(item.id)} type="button" />
            </S.CartItem>
          ))}
        </ul>
        <S.Quantiy>{items.length} jogos no carrinho</S.Quantiy>
        <S.Prices>
          Total de {parseToBrl(getTotalPrice(items))}{' '}
          <span>Em até 6x sem juros</span>
        </S.Prices>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={goToCheckout}
        >
          Continuar com a compra
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
