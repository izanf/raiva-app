import { Button } from "../components"
import { Container } from "../components"
import useAuthentication from "../state/auth"

import Menu from './Menu/Menu'

const menuOptionsAgent = [
  { iconName: 'folder', title: 'Todos casos registrados', path: 'CasesList' },
]

const menuOptionsUser = [
  { iconName: 'file', title: 'Novo caso', path: 'CasesRegister' },
  { iconName: 'folder', title: 'Casos registrados', path: 'CasesList', params: { isByUser: true } },
  { iconName: 'y-combinator', title: 'Profilaxia', path: 'Prophylaxis' },
]

const menuOptionsCommon = [
  { iconName: 'y-combinator', title: 'HealthUnits', path: 'HealthUnits' }
]

const Home = ({ navigation }) => {
  const { user } = useAuthentication()
  const menu = [...menuOptionsCommon, ...(user?.agenteSaude ? menuOptionsAgent : menuOptionsUser)]
  // const menu = [...menuOptionsCommon, ...menuOptionsAgent, ...menuOptionsUser]
  const { logout } = useAuthentication()

  return (
    <Container py="16px">
      <Menu data={menu} navigation={navigation} />
      <Button onPress={logout} mt="16px">Logout</Button>
    </Container>
  )
}

export default Home
