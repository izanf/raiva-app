import { Button } from "../components"
import { Container } from "../components"
import useAuthentication from "../state/auth"

import Menu from './Menu/Menu'

const menuOptions = [
  { iconName: 'file', title: 'Novo caso', path: 'CasesRegister' },
  { iconName: 'folder', title: 'Casos registrados', path: 'CasesList' },
  { iconName: 'y-combinator', title: 'Profilaxia', path: 'Prophylaxis' },
  { iconName: 'y-combinator', title: 'HealthUnits', path: 'HealthUnits' }
]

const Home = ({ navigation }) => {
  const { logout } = useAuthentication()

  return (
    <Container py="16px">
      <Menu data={menuOptions} navigation={navigation} />
      <Button onPress={logout} mt="16px">Logout</Button>
    </Container>
  )
}

export default Home
