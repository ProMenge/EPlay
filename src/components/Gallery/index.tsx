import Section from '../Section'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import spider from '../../assets/images/Banner.png'

import Hogwarts from '../../assets/images/HogwartsHero.png'
import Play from '../../assets/images/Play.png'
import Zoom from '../../assets/images/Zoom.png'
import Close from '../../assets/images/close.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: Hogwarts
  },
  {
    type: 'image',
    url: spider
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/1O6Qstncpnc?si=a1whlvTHeoaX861E'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  return (
    <>
      <Section background="black" title="Gallery">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Media ${index + 1} from ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Click to maximize the media"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={Close} alt="Close Icon" />
          </header>
          <img src={spider} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
