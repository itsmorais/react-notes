import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles';

import { Header } from '../../components/header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input';
import { Section } from '../../components/section'
import { Note } from '../../components/Note';
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()


  function handleTagsSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([])
    }
    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    }
    else {
      setTagsSelected(prevState => [...prevState, tagName])

    }

  }

  function handleDetails(id) {
    navigate(`/detail/${id}`)

  }

  useEffect(() => {
    async function fetchTags() {
      const res = await api.get("/tags")
      setTags(res.data)
    }


    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const res = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(res.data)
    }
    fetchNotes()
  }, [tagsSelected, search])
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />
      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagsSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                onClick={() => handleTagsSelected(tag.name)}
                title={tag.name}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>))
        }

      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)} />
      </Search>

      <Content>
        <Section title="Minhas notas">

          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}


              />
            ))
          }


        </Section>
      </Content>
      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>

    </Container>

  )
}