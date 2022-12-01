import { Container, Form, Background } from "./styles";
import { Input } from '../../components/input'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/button'
import { ButtonText } from '../../components/buttonText'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>
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
        <Button title="Entrar" />
        <a href="#"></a>
        <ButtonText title="Criar conta" isActive />


      </Form>
      <Background />

    </Container>
  )
}