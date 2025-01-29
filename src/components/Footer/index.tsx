import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <S.Container>
      <div className="container">
        <S.FooterSection>
          <S.SectionTitle>Categories</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#rpg"
              >
                RPG
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de ação"
                to="/categories#action"
              >
                Action
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de esportes"
                to="/categories#sports"
              >
                Sports
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulation
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fight"
              >
                Fight
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <S.FooterSection>
          <S.SectionTitle>Shortcut</S.SectionTitle>
          <S.Links>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de jogos em promoção"
                to="/#on-sale"
              >
                Promotion
              </S.Link>
            </li>
            <li>
              <S.Link
                title="Clique aqui para acessar a seção de jogos que serão lançados em breve"
                to="/#coming-soon"
              >
                Coming Soon
              </S.Link>
            </li>
          </S.Links>
        </S.FooterSection>
        <p>
          {currentYear} - &copy; M-Play - All rights reserved. This website and
          its content are protect by copright laws
        </p>
      </div>
    </S.Container>
  )
}

export default Footer
