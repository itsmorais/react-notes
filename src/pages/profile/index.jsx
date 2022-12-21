import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";
import { ButtonText } from "../../components/buttonText";




export function Profile() {
  const { user, updateProfile } = useAuth()
  const [name, setNome] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  async function handleUpdate() {
    const updated = {
      name, email, password: newPassword, old_password: password
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({
      user: userUpdated, avatarFile
    })
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)



    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)

  }
  function handleBack() {
    navigate(-1)
  }
  return (
    <Container>

      <header>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft />
        </button>

      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Imagem do usuário" />
          <label htmlFor="avatar"><FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar} />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setNome(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}


        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}

        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}

        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>

    </Container>
  )
}