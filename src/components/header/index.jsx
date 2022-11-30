import { Container, Profile , Logout} from "./style";
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/itsmorais.png" alt="Foto de usuário" srcset="" />
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