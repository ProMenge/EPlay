import styled from 'styled-components'
import { colors } from '../../styles'

export const Items = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 16px;
  img {
    border: 2px solid ${colors.white};
    border-radius: 8px;
    width: 180px;
    height: 180px;
    object-fit: cover;
  }
`
