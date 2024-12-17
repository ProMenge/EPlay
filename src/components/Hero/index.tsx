import banner from '../../assets/images/HogwartsHero.png'
import Tag from '../Tag'
import * as enums from '../../utils/enums/Tags'

import { Banner, Infos } from './styles'
import Button from '../Button'

const Hero = () => {
  return (
    <Banner style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div>
          <Tag tag={enums.Tag.RPG}>RPG</Tag>
          <Tag tag={enums.Tag.PS5}>PS5</Tag>
        </div>
        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>From R$ 250,00</span>
            For R$190,00
          </p>
          <Button type="button" title="Click here to add this game to cart">
            {' '}
            Add to Cart{' '}
          </Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
