import Button from '../Button'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantiy,
  CartItem
} from './styles'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/root-reducer'
import { close, remove } from '../../redux/cart/slice'
import { systemTagIdentifier, categoryTagIdentifier } from '../Hero'
import { formatPriceToBrl } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cartReducer)

  const dispatch = useDispatch()

  const removeGame = (id: number) => {
    dispatch(remove(id))
  }

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((count, value) => {
      return (count = value.prices.current!)
    }, 0)
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
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
                <span>{formatPriceToBrl(item.prices.current)}</span>
              </div>
              <button onClick={() => removeGame(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantiy>{items.length} jogos no carrinho</Quantiy>
        <Prices>
          Total de {formatPriceToBrl(getTotalPrice())}{' '}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
