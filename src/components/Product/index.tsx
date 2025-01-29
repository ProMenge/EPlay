import { Tag as TagEnum } from '../../utils/enums/Tags'

import Tag from '../Tag'

import * as S from './styles'

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
    <S.Card
      title={`Clique aqui para ver mais detalhes do jogo: ${title}`}
      to={`/product/${id}`}
    >
      <img src={image} alt={title} width={222} height={250} />

      <S.Infos>
        {infos.map((info) => (
          <Tag tag={TagEnum.NUMBER} key={info}>
            {info}
          </Tag>
        ))}
      </S.Infos>
      <S.Title>{title}</S.Title>
      <Tag tag={tagCategory}>{category}</Tag>
      <Tag tag={tagSystem}>{system}</Tag>
      <S.Description>{getDescription(description)}</S.Description>
    </S.Card>
  )
}

export default Product
