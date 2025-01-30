import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

import { useGetFeaturedGameQuery } from '../../services/api'
import { parseToBrl } from '../../utils'

import * as enums from '../../utils/enums/Tags'
import * as S from './styles'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big" tag={enums.Tag.NUMBER}>
          Highlight of the day
        </Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            From <span>{parseToBrl(game.prices.old)}</span> <br />
            For just {parseToBrl(game.prices.current)}
          </S.Prices>
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
    </S.Image>
  )
}

export default Banner
