import { PacmanLoader } from 'react-spinners'

import * as S from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <S.Container>
      <PacmanLoader color={colors.white} />
    </S.Container>
  )
}

export default Loader
