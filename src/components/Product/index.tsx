import { Tag as TagEnum } from '../../utils/enums/Tags'
import Tag from '../Tag'

import { Card, Description, Infos, Title } from './styles'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  tagCategory: TagEnum
  tagSystem: TagEnum
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  tagCategory,
  tagSystem
}: Props) => {
  return (
    <Card>
      <img src={image} alt={title} width={222} height={250} />

      <Infos>
        {infos.map((info) => (
          <Tag tag={TagEnum.NUMBER} key={info}>
            {info}
          </Tag>
        ))}
      </Infos>
      <Title>{title}</Title>
      <Tag tag={tagCategory}>{category}</Tag>
      <Tag tag={tagSystem}>{system}</Tag>
      <Description>{description}</Description>
    </Card>
  )
}

export default Product
