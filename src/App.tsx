import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Textarea from './components/Textarea/indes'

type TarefaProps = {
  titulo: string
  descricao: string
  status: boolean
  data: Date
  id: number
}

function App() {
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const novaTarefa: TarefaProps = {
      descricao,
      status: false,
      titulo,
      data: new Date(),
      id: Math.floor(Math.random() * 1000),
    }

    console.log(novaTarefa)
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
