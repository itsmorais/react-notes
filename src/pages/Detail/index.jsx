import { Container, Content, Links } from './styles'
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button'
import { Section } from '../../Components/Section'
import { Tag } from '../../Components/Tag'
import { ButtonText } from '../../Components/ButtonText'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../services/api'

export function Detail() {
  const [data, setData] = useState(null)
  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }
  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)


    }
  }

  useEffect(() => {
    async function fetchNote() {
      const res = await api.get(`/notes/${params.id}`)
      setData(res.data)
    }

    fetchNote()
  }, [])



  return (
    <Container>
      <Header />

      {
        data &&

        <main>
          <Content>
            <ButtonText title="Excluir nota"
              onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            {

              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a
                          href={link.url} target="_blank">
                          {link.url}

                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {data.tags &&


              <Section title="Marcadores">
                {data.tags.map(tag => (
                  <Tag
                    key={String(tag.id)}
                    title={tag.name} />

                ))

                }

              </Section>
            }


            <Button title="Voltar"
              onClick={handleBack} />
          </Content>
        </main>
      }
    </Container>
  )
}

