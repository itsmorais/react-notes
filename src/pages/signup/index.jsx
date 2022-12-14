import { Link, useNavigate } from 'react-router-dom'
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { useState } from "react"
import { api } from "../../services/api"
import { Container, Form, Background } from "./styles";
import { Input } from '../../Components/input'
import { Button } from '../../Components/button'
import { ButtonText } from '../../Components/buttonText'




export function SignUp() {
  const [name, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      alert("Preencha todos os campos")
    }
    api.post("/users", { name, email, password }).then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadastrar")
      }
    })
  }

  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setNome(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}

        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}

        />
        <Button title="Cadastrar" onClick={handleSignUp} />
        <Link to="/">
          <ButtonText title="Voltar para o login" isActive /></Link>


      </Form>
      <Background />

    </Container>
  )
}