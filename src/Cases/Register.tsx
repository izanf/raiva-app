import { useState } from "react"

import * as API from '../services/api'

import useAuthentication from '../state/auth'

import { Button, Container, Input, Dropdown } from "../components"

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

const CasesRegister = ({ navigation }) => {
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

    if (componentType === 'boolean') return null

    return <InputComponent onChange={(value) => handleChange(key, value)} {...rest} />
  }

  const registerCase = async () => {
    try {
      setIsLoading(true)

      await API.registerCase(user.id, parseDataToObj(data))

      navigation.navigate('CasesList')
    } catch (error) {

    } finally {
      setIsLoading(false)
    } 
  }

  return (
    <Container>
      {data.map(renderComponent)}
      <Dropdown mt="8px" onChange={(value) => handleChange('vacinado', value)} options={[{ label: 'Sim', value: true }, { label: 'Não', value: false }]} />
      <Dropdown mt="8px" onChange={(value) => handleChange('domestico', value)} options={[{ label: 'Sim', value: true }, { label: 'Não', value: false }]}  />
      <Button mt="16px" onPress={registerCase} isLoading={isLoading}>Registrar</Button>
    </Container>
  )
}

export default CasesRegister
