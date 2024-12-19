import styled from 'styled-components'
import { Props } from '.'
import { colors } from '../../styles'
import { Tag } from '../../utils/enums/Tags'

export const TagContainer = styled.div<Props & { tag: Tag }>`
  background-color: ${({ tag }) => {
    switch (tag) {
      case Tag.NUMBER:
        return colors.green // cor para preços e descontos
      case Tag.ACTION:
        return colors.yellow // cor coerente com ação
      case Tag.SPORTS:
        return colors.orange
      case Tag.ADVENTURE:
        return colors.purple
      case Tag.RPG:
        return colors.darkGreen
      case Tag.FIGHT:
        return colors.darkPurple
      case Tag.FPS:
        return colors.teal
      case Tag.PS5:
        return colors.blue // cor coerente com PS5
      case Tag.SWITCH:
        return colors.red // cor coerente com Switch
      case Tag.XBOX:
        return colors.green
      case Tag.STEAM:
        return colors.steamBlue
      case Tag.WINDOWS:
        return colors.darkGray
      case Tag.SIMULATION:
        return colors.amethyst
      default:
        return colors.lightBlue // cor padrão
    }
  }};
  color: ${colors.white};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  border-radius: 8px;
  display: inline-block;
`
