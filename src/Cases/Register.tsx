import { useState } from "react"

import * as API from '../services/api'

import useAuthentication from '../state/auth'

import { Button, Container, Input } from "../components"

const initialData = [
  { key: 'nomeVitima', label: 'Nome', value: 'Izanderson' },
  { key: 'idadeVitima', label: 'Idade', value: '23' },
  { key: 'dataOcorrido', label: 'Data do evento', value: new Date() },
  { key: 'tipoAnimal', label: 'Tipo do animal', value: 'Cão' },
  { key: 'bairroOcorrido', label: 'Local do evento', value: 'Neopolis' },
  { key: 'localMordida', label: 'Local do animal', value: 'braço' },
  { key: 'vacinado', label: 'Vacinado', value: false },
  { key: 'domestico', label: 'Domestico', value: false }
]

const inputComponent = {
  string: Input
}

const CasesRegister = () => {
  const { user } = useAuthentication()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(initialData)

  const handleChange = (field, value) => {
    setData((prev) => prev.map((item) =>
      item.key === field ? { ...item, value } : item
    ))
  }

  const parseDataToObj = (data) => {
    const obj = {}

    data.forEach(({ key, value }) => {
      obj[key] = value
    })

    return obj
  }
  
  const renderComponent = ({ key, ...rest }) => {
    const componentType = typeof rest.value
    const existsComponent = Object.keys(inputComponent).find(item => item === componentType)
    const InputComponent = inputComponent[existsComponent ? componentType : 'string']

    return <InputComponent onChange={(value) => handleChange(key, value)} {...rest} />
  }

  const registerCase = async () => {
    console.log('firing register case')
    try {
      setIsLoading(true)
      const response = await API.registerCase(user.id, parseDataToObj(data))
      console.log('registradow', response)   
    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      {data.map(renderComponent)}
      <Button mt="16px" onPress={registerCase}>Registrar</Button>
    </Container>
  )
}

export default CasesRegister
