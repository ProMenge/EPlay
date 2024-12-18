import Section from '../Section'
import { Item, Items } from './styles'

import Hogwarts from '../../assets/images/HogwartsHero.png'

const Gallery = () => {
  return (
    <Section background="black" title="Gallery">
      <Items>
        <Item>
          <img src={Hogwarts} alt="" />
        </Item>
        <Item>
          <img src={Hogwarts} alt="" />
        </Item>
        <Item>
          <img src={Hogwarts} alt="" />
        </Item>
        <Item>
          <img src={Hogwarts} alt="" />
        </Item>
      </Items>
    </Section>
  )
}

export default Gallery
