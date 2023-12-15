import { useState } from 'react'

import useAuthentication from '../state/auth'

import Box from '../components/Box'
import Container from '../components/Container'
import Text from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = () => {
  const { login, error } = useAuthentication()
  const [user, setUser] = useState('017.568.394-84')

  return (
    <Container flex="1" justifyContent="center">
      <Text textAlign="center">Mapa da Raiva</Text>
      <Box gap="16px" my="32px">
        <Box>
          <Input placeholder="000.000.000-00" value={user} onChange={setUser} error={error} />
        </Box>
        <Button onPress={() => login(user)}>Login</Button>
      </Box>
    </Container>
  )
}

export default Login
