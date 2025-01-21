import Button from '../Button'
import * as enums from '../../utils/enums/Tags'
import starwars from '../../assets/images/JediSurvivor.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantiy,
  CartItem
} from './styles'
import Tag from '../Tag'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={starwars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag tag={enums.Tag.RPG}> RPG</Tag>
            <Tag tag={enums.Tag.PS5}> PS5</Tag>
          </div>
          <span>R$150,00</span>
        </CartItem>
      </ul>
      <Quantiy>2 jogos no carrinho</Quantiy>
      <Prices>
        Total de tatata <span>Em até 6x sem juros</span>
      </Prices>
      <Button title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
