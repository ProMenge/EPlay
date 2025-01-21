import { useParams } from 'react-router-dom'
import Gallery from '../../components/Gallery'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()

  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="About the game" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="More details" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product
