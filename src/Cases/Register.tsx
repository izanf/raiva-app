import { useState } from "react"

import * as API from '../services/api'

import { Button, Container, Input } from "../components"

const initialData = [
  { key: 'name', label: 'Nome', value: '' },
  { key: 'age', label: 'Idade', value: '' },
  { key: 'eventDate', label: 'Data do evento', value: new Date() },
  { key: 'animalType', label: 'Tipo do animal', value: '' },
  { key: 'bodyLocationEvent', label: 'Local do evento', value: '' },
  { key: 'animalLocation', label: 'Local do animal', value: '' }
]

const inputComponent = {
  string: Input
}

const CasesRegister = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState(initialData)

  const handleChange = (field, value) => {
    setData((prev) => prev.map((item) =>
      item.key === field ? { ...item, value } : item
    ))
  }
  
  const renderComponent = ({ key, ...rest }) => {
    const componentType = typeof rest.value
    const existsComponent = Object.keys(inputComponent).find(item => item === componentType)
    const InputComponent = inputComponent[existsComponent ? componentType : 'string']

    return <InputComponent onChange={(value) => handleChange(key, value)} {...rest} />
  }

  const registerCase = async () => {
    try {
      setIsLoading(true)
      const response = await API.registerCase(data)
      alert('registradow')   

    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      {data.map(renderComponent)}
      <Button mt="16px">Registrar</Button>
    </Container>
  )
}

export default CasesRegister
