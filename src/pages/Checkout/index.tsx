import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row } from './styles'

const Checkout = () => {
  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input type="text" id="fullName" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-Mail</label>
              <input type="email" id="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryEmail">E-Mail</label>
              <input type="email" id="deliveryEmail" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmDeliveryEmail">Confirme o E-Mail</label>
              <input type="email" id="confirmDeliveryEmail" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <div>
            <p>
              Ao optar por essa forma de pagamento, é importante lembrar que a
              confirmação pode levar até 3 dias úteis, devido aos prazos
              estabelecidos pelas instituições financeiras. Portanto, a
              liberação do código de ativação do jogo adquirido ocorrerá somente
              após a aprovação do pagamento do boleto.
            </p>
          </div>
        </>
      </Card>

      <Button type="button" title="Clique aqui para finalizar a compra.">
        Finalizar Compra
      </Button>
    </div>
  )
}

export default Checkout
