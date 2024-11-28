import Tag from '../Tag'
import * as enums from '../../utils/enums/Tags'

import { Card, Description, Title } from './styles'

const Product = () => {
  return (
    <Card>
      <img
        src="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/23NP6E/2c7c89a-7b95430ba898a672e111d553.jpg/f/monster-hunter-wilds.jpg?height=650"
        alt=""
        width={222}
        height={250}
      />
      <Title>title</Title>
      <Tag tag={enums.Tag.ACTION}>Action</Tag>
      <Tag tag={enums.Tag.WINDOWS}>Windows</Tag>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        nesciunt ad, maxime, labore ducimus dolorem, neque vitae mollitia
        veritatis iste vel sed pariatur? Hic enim cumque consequuntur? Autem,
        laudantium molestias?
      </Description>
    </Card>
  )
}

export default Product
