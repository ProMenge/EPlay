import { Game } from '../../pages/Home'
import Product from '../Product'

import * as S from './styles'
import { systemTagIdentifier, categoryTagIdentifier } from '../../utils/index'
import { parseToBrl } from '../../utils/index'
import Loader from '../Loader'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games?: Game[]
  id?: string
  isLoading: boolean
}

const ProductsList = ({ background, title, games, id, isLoading }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}% OFF`)
    }
    if (game.prices.current) {
      tags.push(parseToBrl(game.prices.current))
    }
    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Container id={id} background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        <S.List>
          {games &&
            games.map((game) => (
              <li key={game.id}>
                <Product
                  id={game.id}
                  category={game.details.category}
                  description={game.description}
                  image={game.media.thumbnail}
                  system={game.details.system}
                  infos={getGameTags(game)}
                  tagCategory={categoryTagIdentifier(game)}
                  tagSystem={systemTagIdentifier(game)}
                  title={game.name}
                />
              </li>
            ))}
        </S.List>
      </div>
    </S.Container>
  )
}

export default ProductsList
