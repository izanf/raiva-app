import { useState } from "react"

import * as API from '../services/api'

import useAuthentication from '../state/auth'

import { Button, ScrollContainer, Input, Dropdown } from "../components"
import Datepicker from "../components/Datepicker"

const initialData = [
  { key: 'nomeVitima', label: 'Nome', value: '' },
  { key: 'idadeVitima', label: 'Idade', value: '' },
  { key: 'dataOcorrido', label: 'Data do evento', value: new Date(), type: 'DateTime' },
  { key: 'tipoAnimal', label: 'Tipo do animal', value: '' },
  { key: 'bairroOcorrido', label: 'Bairro ocorrido', value: '' },
  { key: 'ruaOcorrido', label: 'Rua ocorrido', value: '' },
  { key: 'localMordida', label: 'Local da mordida', value: '' },
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
  
  const renderComponent = ({ key, type, ...rest }, index: number) => {
    const componentType = typeof rest.value
    const existsComponent = Object.keys(inputComponent).find(item => item === componentType)
    const InputComponent = inputComponent[existsComponent ? componentType : 'string']

    if (componentType === 'boolean') return null
    if (type === 'DateTime') return null

    return <InputComponent key={index} onChange={(value) => handleChange(key, value)} {...rest} zIndex={index} />
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
    <ScrollContainer>
      {data.map(renderComponent)}
      <Datepicker label="Data do evento" mt="8px" onChange={(value) => handleChange('dataOcorrido', value)} />
      <Dropdown label="Vacinado" mt="8px" onChange={(value) => handleChange('vacinado', value)} options={[{ label: 'Sim', value: true }, { label: 'Não', value: false }]} />
      <Dropdown label="Domestico" mt="8px" onChange={(value) => handleChange('domestico', value)} options={[{ label: 'Sim', value: true }, { label: 'Não', value: false }]}  />
      <Button mt="16px" mb="32px" onPress={registerCase} isLoading={isLoading}>Registrar</Button>
    </ScrollContainer>
  )
}

export default CasesRegister
