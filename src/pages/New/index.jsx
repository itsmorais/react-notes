import { Container, Form } from "./styles";
import { Header } from "../../components/header"
import { Input } from "../../components/input"
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/section"
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/button"

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar </a>
          </header>

          <Input
            placeholder="Título"

          />
          <TextArea
            placeholder="Observações"
          />

          <Section title="Links úteis">
            <NoteItem value="https://michaelmorais.com" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button
            title="Salvar"
          />
        </Form>
      </main>

    </Container>
  )
}