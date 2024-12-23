import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

import { useState } from 'react'
import Play from '../../assets/images/Play.png'
import Zoom from '../../assets/images/Zoom.png'
import Close from '../../assets/images/close.png'

import { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisisble: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
          {items.map((media, index) => (
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
