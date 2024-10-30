import { TagContainer } from './styles'
import { Tag as TagEnum } from '../../utils/enums/Tags'

export type Props = {
  size?: 'small' | 'big'
  children: string
  tag: TagEnum
}

const Tag = ({ children, size = 'small', tag }: Props) => {
  return (
    <TagContainer size={size} tag={tag}>
      {children}
    </TagContainer>
  )
}

export default Tag
