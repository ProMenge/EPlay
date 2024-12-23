import { useEffect, useState } from 'react'

import { Game } from '../../pages/Home'
import * as enums from '../../utils/enums/Tags'
import Button from '../Button'
import { formatPriceToBrl } from '../ProductsList'
import Tag from '../Tag'
import { Image, Prices, Title } from './styles'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big" tag={enums.Tag.NUMBER}>
          Highlight of the day
        </Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            From <span>{formatPriceToBrl(game.prices.old)}</span> <br />
            For just {formatPriceToBrl(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Click here to enjoy the offer!"
        >
          {' '}
          Enjoy it!{' '}
        </Button>
      </div>
    </Image>
  )
}

export default Banner
