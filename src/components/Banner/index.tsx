import { Image, Title, Prices } from './styles'
import bannerImg from '../../assets/images/Banner.png'
import Tag from '../Tag'
import * as enums from '../../utils/enums/Tags'

const Banner = () => {
  return (
    <Image style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <Tag size="big" tag={enums.Tag.NUMBER}>
          Highlight of the day
        </Tag>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          <span>From R$70,00</span> <br />
          For just R$ 39,90
        </Prices>
      </div>
    </Image>
  )
}

export default Banner
