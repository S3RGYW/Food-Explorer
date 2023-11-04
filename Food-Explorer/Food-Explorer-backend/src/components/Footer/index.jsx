import logoFooter from 'src\assets\logo-footer.svg';

import { Container, Content } from './styles';

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <img src={logoFooter} alt="Logo" />
          <span>food explorer</span>
        </div>
        <p>© 2022 - Todos os direitos reservados.</p>
      </Content>
    </Container>
  )
}