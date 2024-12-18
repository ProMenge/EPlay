import styled from 'styled-components'
import { colors } from '../../styles'

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 16px;
  position: relative;
  > img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 180px;
    height: 180px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      width: 14px;
      height: 14px;
      cursor: pointer;
    }
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`
