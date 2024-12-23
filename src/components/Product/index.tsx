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
  id: number
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  tagCategory,
  tagSystem,
  id
}: Props) => {
  const getDescription = (newDescription: string) => {
    if (newDescription.length > 95) {
      return newDescription.slice(0, 92) + '...'
    }

    return newDescription
  }
  return (
    <Card to={`/product/${id}`}>
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
      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product
