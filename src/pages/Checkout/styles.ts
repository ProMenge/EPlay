import styled from 'styled-components'
import { colors } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`

export const InputGroup = styled.div`
  flex: auto;
  label {
    font-size: 14;
    margin-bottom: 8px;
    display: block;
    width: 100%;
  }

  input {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0 8px;
    width: 100%;
  }
`
