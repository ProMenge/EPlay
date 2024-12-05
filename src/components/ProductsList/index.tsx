import Product from '../Product'
import { List, Container, Title } from './styles'
//import * as enums from '../../utils/enums/Tags'
import Game from '../../models/Game'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => {
  return (
    <Container background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.category}
              description={game.description}
              image={game.image}
              system={game.system}
              infos={game.infos}
              tagCategory={game.tagCategory}
              tagSystem={game.tagSystem}
              title={game.title}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
