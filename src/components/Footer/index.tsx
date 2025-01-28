import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categories</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link to="/categories#action">Action</Link>
            </li>
            <li>
              <Link to="/categories#sports">Sports</Link>
            </li>
            <li>
              <Link to="/categories#simulation">Simulation</Link>
            </li>
            <li>
              <Link to="/categories#fight">Fight</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Shortcut</SectionTitle>
          <Links>
            <li>
              <Link to="/#on-sale">Promotion</Link>
            </li>
            <li>
              <Link to="/#coming-soon">Coming Soon</Link>
            </li>
          </Links>
        </FooterSection>
        <p>
          {currentYear} - &copy; M-Play - All rights reserved. This website and
          its content are protect by copright laws
        </p>
      </div>
    </Container>
  )
}

export default Footer
