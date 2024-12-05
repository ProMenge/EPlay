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
              <Link>RPG</Link>
            </li>
            <li>
              <Link>Action</Link>
            </li>
            <li>
              <Link>Adventure</Link>
            </li>
            <li>
              <Link>Sports</Link>
            </li>
            <li>
              <Link>Simulation</Link>
            </li>
            <li>
              <Link>Strategy</Link>
            </li>
            <li>
              <Link>FPS</Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Shortcut</SectionTitle>
          <Links>
            <li>
              <Link>News</Link>
            </li>
            <li>
              <Link>Promotion</Link>
            </li>
            <li>
              <Link>Coming Soon</Link>
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
