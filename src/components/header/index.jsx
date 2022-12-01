import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/itsmorais.png" alt="Foto de usuário" srcSet="" />
        <div>
          <span>Bem-Vindo,</span>
          <strong>Michael Morais</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine></RiShutDownLine>
      </Logout>

    </Container>
  )
}