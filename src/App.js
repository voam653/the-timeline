import React from 'react';
import Profile from './pages/Profile'
import { Container, HeaderConatiner, Header, Section, FooterContainer, Footer, GlobalStyle } from './style'

function App() {
  return (
    <Container>
      <GlobalStyle />
      <HeaderConatiner>
        <Header>
          Conteudo do header
        </Header>
      </HeaderConatiner>

      <Section>
        <Profile />
      </Section>

      <FooterContainer>
        <Footer>
          footer
        </Footer>
      </FooterContainer>
    </Container>
  );
}

export default App;
