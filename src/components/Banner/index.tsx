import bannerImg from '../../assets/images/Banner.png'
import * as enums from '../../utils/enums/Tags'
import Button from '../Button'
import Tag from '../Tag'
import { Image, Prices, Title } from './styles'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big" tag={enums.Tag.NUMBER}>
          Highlight of the day
        </Tag>
        <div>
          <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
          <Prices>
            <span>From R$70,00</span> <br />
            For just R$ 39,90
          </Prices>
        </div>
        <Button
          type="link"
          to="/products"
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
