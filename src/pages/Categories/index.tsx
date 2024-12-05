import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import * as enums from '../../utils/enums/Tags'
import resident from '../../assets/images/Resident.png'
import diablo from '../../assets/images/DiabloIV.png'
import street from '../../assets/images/StreetFighter.png'
import starwars from '../../assets/images/JediSurvivor.png'
import fifa23 from '../../assets/images/Fifa23.png'

const promotions: Game[] = [
  {
    id: 1,
    category: 'Action',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: resident,
    title: 'Resident Evil 4',
    tagCategory: enums.Tag.ACTION,
    tagSystem: enums.Tag.PS5,
    infos: ['10%', 'R$250.00']
  },
  {
    id: 2,
    category: 'Fight',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: street,
    title: 'Street Fighter',
    tagCategory: enums.Tag.FIGHT,
    tagSystem: enums.Tag.PS5,
    infos: ['10%', 'R$250.00']
  },
  {
    id: 3,
    category: 'RPG',
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: diablo,
    title: 'Diablo IV',
    tagCategory: enums.Tag.RPG,
    tagSystem: enums.Tag.WINDOWS,
    infos: ['15%', 'R$230.00']
  },
  {
    id: 4,
    category: 'Action',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: starwars,
    title: 'Jedi Survivor',
    tagCategory: enums.Tag.ADVENTURE,
    tagSystem: enums.Tag.XBOX,
    infos: ['5%', 'R$290.00']
  }
]

const comingSoon: Game[] = [
  {
    id: 5,
    category: 'Sports',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: fifa23,
    title: 'Fifa 23',
    tagCategory: enums.Tag.SPORTS,
    tagSystem: enums.Tag.PS5,
    infos: ['10%', 'R$250.00']
  },
  {
    id: 6,
    category: 'Fight',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: street,
    title: 'Street Fighter',
    tagCategory: enums.Tag.FIGHT,
    tagSystem: enums.Tag.PS5,
    infos: ['10%', 'R$250.00']
  },
  {
    id: 7,
    category: 'RPG',
    system: 'Windows',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: diablo,
    title: 'Diablo IV',
    tagCategory: enums.Tag.RPG,
    tagSystem: enums.Tag.WINDOWS,
    infos: ['15%', 'R$230.00']
  },
  {
    id: 8,
    category: 'Action',
    system: 'PS5',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus atque laboriosam fugit, quas aliquam, sit repellat laudantium dolorum magnam, rem ut porro. Architecto nam veritatis sequi laboriosam sed minima repudiandae.',
    image: starwars,
    title: 'Jedi Survivor',
    tagCategory: enums.Tag.ADVENTURE,
    tagSystem: enums.Tag.XBOX,
    infos: ['5%', 'R$290.00']
  }
]

const Categories = () => (
  <>
    <ProductsList games={promotions} title="RPG" background="gray" />
    <ProductsList games={comingSoon} title="Action" background="black" />
    <ProductsList games={promotions} title="Adventure" background="gray" />
    <ProductsList
      games={comingSoon}
      title="First Person Shooter"
      background="black"
    />
  </>
)

export default Categories
