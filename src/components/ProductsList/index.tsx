import Product from '../Product'
import { Container, List, Title } from './styles'
import * as enums from '../../utils/enums/Tags'
import { Game } from '../../pages/Home'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

export const formatPriceToBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const ProductsList = ({ background, title, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = []
    if (game.release_date) {
      tags.push(game.release_date)
    }
    if (game.prices.discount) {
      tags.push(`${game.prices.discount}% OFF`)
    }
    if (game.prices.current) {
      tags.push(formatPriceToBrl(game.prices.current))
    }
    return tags
  }
  const systemTagIdentifier = (games: Game) => {
    if (games.details.system === 'PS5') return enums.Tag.PS5
    if (games.details.system === 'SWITCH') return enums.Tag.SWITCH
    if (games.details.system === 'XBOX') return enums.Tag.XBOX
    if (games.details.system === 'Steam') return enums.Tag.STEAM
    if (games.details.system === 'windows') return enums.Tag.WINDOWS

    return enums.Tag.WINDOWS
  }

  const categoryTagIdentifier = (games: Game) => {
    if (games.details.category === 'Ação') return enums.Tag.ACTION
    if (games.details.category === 'Esporte') return enums.Tag.SPORTS
    if (games.details.category === 'Simulação') return enums.Tag.SIMULATION
    if (games.details.category === 'Aventura') return enums.Tag.ADVENTURE
    if (games.details.category === 'Luta') return enums.Tag.FIGHT
    if (games.details.category === 'FPS') return enums.Tag.FPS
    if (games.details.category === 'RPG') return enums.Tag.RPG

    return enums.Tag.NUMBER
  }
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              system={game.details.system}
              infos={getGameTags(game)}
              tagCategory={categoryTagIdentifier(game)}
              tagSystem={systemTagIdentifier(game)}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
