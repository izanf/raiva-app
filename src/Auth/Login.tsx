import { useState } from 'react'

import Box from '../components/Box'
import Container from '../components/Container'
import Text from '../components/Text'
import Button from '../components/Button'
import Input from '../components/Input'

const Login = ({ navigation }) => {
  const [user, setUser] = useState('')

  return (
    <Container flex="1" justifyContent="center">
      <Text textAlign="center">Mapa da Raiva</Text>
      <Box gap="16px" my="32px">
        <Box>
          <Input placeholder="000.000.000-00" value={user} onChange={setUser} />
        </Box>
        <Button onPress={() => navigation.navigate('Home')}>Login</Button>
      </Box>
    </Container>
  )
}

export default Login
