import Product from '../Product'
import { List, Container, Title } from './styles'

type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Container>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product />
          <Product />
          <Product />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
