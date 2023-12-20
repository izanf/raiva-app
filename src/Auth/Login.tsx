import { useState } from 'react'

import useAuthentication from '../state/auth'

import Box from '../components/Box'
import Container from '../components/Container'
import Text from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'

function applyCpfMask(cpf) {
  return cpf
      .replace(/\D/g, '') // Remove all non-digit characters
      .replace(/(\d{3})(\d)/, '$1.$2') // Place the first dot
      .replace(/(\d{3})(\d)/, '$1.$2') // Place the second dot
      .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Place the dash
      .replace(/(-\d{2})\d+?$/, '$1'); // Allow only two digits after the dash
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { login, error } = useAuthentication()
  const [user, setUser] = useState('')

  const handleLogin = async () => {
    try {
      setIsLoading(true)

      await login(user)
    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (value ) => {
    const maskedValue = applyCpfMask(value)

    setUser(maskedValue)
  }

  return (
    <Container flex="1" justifyContent="center">
      <Text textAlign="center">Mapa da Raiva</Text>
      <Box my="32px">
        <Box>
          <Input label="CPF" placeholder="000.000.000-00" value={user} onChange={handleChange} error={error} />
        </Box>
        <Button mt="16px" onPress={handleLogin} isLoading={isLoading}>Login</Button>
      </Box>
    </Container>
  )
}

export default Login
