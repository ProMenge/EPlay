import Product from '../Product'
import { List, Container, Title } from './styles'
import * as enums from '../../utils/enums/Tags'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          <Product
            category="Action"
            description="Teste"
            image="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23NP6E/2c7c89a-7b95430ba898a672e111d553.jpg/f/monster-hunter-wilds.jpg?height=650"
            system="PS4"
            infos={['-10%', 'R$ 250.00']}
            tagCategory={enums.Tag.ACTION}
            tagSystem={enums.Tag.PS5}
            title="Monster Hunter Wilds"
            tagInfo={enums.Tag.NUMBER}
          />
          <Product
            category="Action"
            description="Teste"
            image="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23NP6E/2c7c89a-7b95430ba898a672e111d553.jpg/f/monster-hunter-wilds.jpg?height=650"
            system="PS4"
            infos={['-10%', 'R$ 250.00']}
            tagCategory={enums.Tag.ACTION}
            tagSystem={enums.Tag.PS5}
            title="Monster Hunter Wilds"
            tagInfo={enums.Tag.NUMBER}
          />
          <Product
            category="Action"
            description="Teste"
            image="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23NP6E/2c7c89a-7b95430ba898a672e111d553.jpg/f/monster-hunter-wilds.jpg?height=650"
            system="PS4"
            infos={['-10%', 'R$ 250.00']}
            tagCategory={enums.Tag.ACTION}
            tagSystem={enums.Tag.PS5}
            title="Monster Hunter Wilds"
            tagInfo={enums.Tag.NUMBER}
          />
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
