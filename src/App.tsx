import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Textarea from './components/Textarea'

type TarefaProps = {
  titulo: string
  descricao: string
  status: boolean
  data: Date
  id: number
}

function App() {
  const [listaTarefas, setListaTarefas] = useState<TarefaProps[]>([])
  const [titulo, setTitulo] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const novaTarefa: TarefaProps = {
      descricao,
      status: false,
      titulo,
      data: new Date(),
      id: Math.floor(Math.random() * 1000),
    }

    const newLista = [...listaTarefas, novaTarefa]
    setListaTarefas(newLista)
    localStorage.setItem('tarefas', JSON.stringify(newLista))
  }

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Input
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
          placeholder="Titulo"
          name="titulo"
        />
        <Textarea
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
          placeholder="Descrição"
          name="descricao"
        />
        <Button classname="btn-cta" onClick={handleClick} color="red">
          clique aquui
        </Button>
      </form>
    </>
  )
}

export default App
