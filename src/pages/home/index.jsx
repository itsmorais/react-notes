import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input';
import { Section } from '../../components/section'
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li> <ButtonText title="Todos" isActive /></li>
        <li> <ButtonText title="React" /></li>
        <li> <ButtonText title="NodeJS" /></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: 1, name: "React" },
              { id: 2, name: "Node" }
            ]
          }} />


        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>

    </Container>

  )
}