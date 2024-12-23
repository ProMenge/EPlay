import * as enums from '../../utils/enums/Tags'
import Tag from '../Tag'

import { Game } from '../../pages/Home'
import Button from '../Button'
import { formatPriceToBrl } from '../ProductsList'
import { Banner, Infos } from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
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
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag tag={categoryTagIdentifier(game)}>{game.details.category}</Tag>
          <Tag tag={systemTagIdentifier(game)}>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>From {formatPriceToBrl(game.prices.old)}</span>
            )}

            {game.prices.current && (
              <>For {formatPriceToBrl(game.prices.current)}</>
            )}
          </p>

          {game.prices.current && (
            <Button type="button" title="Click here to add this game to cart">
              {' '}
              Add to Cart{' '}
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
