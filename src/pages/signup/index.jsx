import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'
import { Link } from 'react-router-dom'


export function SignUp() {
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
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
        />
        <Button title="Cadastrar" />
        <Link to="/">
          <ButtonText title="Voltar para o login" isActive /></Link>


      </Form>
      <Background />

    </Container>
  )
}