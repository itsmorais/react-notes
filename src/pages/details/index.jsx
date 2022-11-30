import {Container, Content,Links} from './styles'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Section } from '../../components/section'
import { Tag } from '../../components/tag'
import { ButtonText } from '../../components/buttonText'

export function Details(){

  return(
    <Container>
    <Header/>
      <main>
        <Content>
    <ButtonText title="Excluir nota"/>
    <h1>Introdução ao React</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita eligendi facere accusamus cupiditate inventore recusandae sequi enim molestiae animi! Voluptatem nisi praesentium autem nihil, quia suscipit a officia amet ut!</p>

    <Section title="Links úteis">
      <Links>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </Links>
    </Section>

    <Section title="Marcadores">
      <Tag title="Express"/>
      <Tag title="Node"/>
    </Section>
    

    <Button title="Voltar"/>
    </Content>
      </main>
    </Container>
  )
}

