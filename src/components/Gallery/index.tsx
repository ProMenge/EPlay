import Section from '../Section'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import spider from '../../assets/images/Banner.png'

import Hogwarts from '../../assets/images/HogwartsHero.png'
import Play from '../../assets/images/Play.png'
import Zoom from '../../assets/images/Zoom.png'
import Close from '../../assets/images/close.png'
import { useState } from 'react'

interface GalleryItem {
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

interface ModalState extends GalleryItem {
  isVisisble: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisisble: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return Zoom
    return Play
  }

  const closeModal = () => {
    setModal({
      isVisisble: false,
      type: 'image',
      url: ' '
    })
  }

  return (
    <>
      <Section background="black" title="Gallery">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() =>
                setModal({
                  isVisisble: true,
                  type: media.type,
                  url: media.url
                })
              }
            >
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
      <Modal className={modal.isVisisble ? 'visible' : ' '}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={Close} alt="Close Icon" onClick={() => closeModal()} />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
