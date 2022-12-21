import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { useNavigate } from "react-router-dom";



export function Header() {
  const { signOut, user } = useAuth()
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  const navigation = useNavigate()

  function handleSignOut() {
    navigation("/")
    signOut()
  }
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto de usuário" srcSet="" />
        <div>
          <span>Bem-Vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine></RiShutDownLine>
      </Logout>

    </Container>
  )
}