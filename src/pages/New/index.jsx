import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section"
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../../components/ButtonText";


export function New() {
  const [title, setTitle] = useState("")
  const [descriptions, setDescription] = useState("")
  const navigate = useNavigate()


  const [links, setLink] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTag] = useState([])
  const [newTag, setNewTag] = useState("")
  function handleBack() {
    navigate(-1)
  }

  function handleAddLink() {
    setLink(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLink(prevState => prevState.filter(item => item !== deleted))

  }

  function handleAddTag() {
    setTag(prevState => [...prevState, newTag])
    setNewTag("")
  }
  function handleRemoveTag(deleted) {
    setTag(prevState => prevState.filter(item => item !== deleted))


  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título para a Nota")
    }
    if (newLink) {
      return alert("Você deixou um link no campo para adicionar mas não adicionou!")
    }
    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar mas não adicionou!")
    }
    await api.post('/notes', {
      title,
      descriptions,
      tags,
      links
    });
    alert("Nota criada com sucesso!")
    navigate("/")
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack}></ButtonText>
          </header>

          <Input
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}

          />
          <TextArea
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => { handleRemoveLink(link) }} />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink} />

          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => { handleRemoveTag(tag) }}
                  />

                ))
              }
              <NoteItem isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag} />
            </div>
          </Section>
          <Button
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>
      </main>

    </Container>
  )
}