import Container from "../components/Container"

import Menu from './Menu/Menu'

const menuOptions = [
  { iconName: 'file', title: 'Registrar novo caso', path: 'CasesRegister' },
  { iconName: 'folder', title: 'Casos registrados', path: 'CasesList' },
  { iconName: 'y-combinator', title: 'Casos registrado2s' }
]

const Home = ({ navigation }) => (
  <Container py="32px">
    <Menu data={menuOptions} navigation={navigation} />
  </Container>
)

export default Home
