import { useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { parseToBrl } from '../../utils'
import * as S from './styles'

import { systemTagIdentifier, categoryTagIdentifier } from '../../utils'

import { add, open } from '../../redux/cart/slice'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag tag={categoryTagIdentifier(game)}>{game.details.category}</Tag>
          <Tag tag={systemTagIdentifier(game)}>{game.details.system}</Tag>
        </div>
        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>From {parseToBrl(game.prices.old)}</span>
            )}

            {game.prices.current && (
              <p>For {parseToBrl(game.prices.current)}</p>
            )}
          </p>

          {game.prices.current && (
            <Button
              onClick={addToCart}
              type="button"
              title="Click here to add this game to cart"
            >
              {' '}
              Add to Cart{' '}
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
