import Container from '../components/Container'

import { Button } from '../components'

import data from './mock.json'

const Prophylaxis = ({ navigation }) => {
  const navigateTo = (prophylaxisCategory) => {
    navigation.navigate('ProphylaxisCategory', { data: prophylaxisCategory })
  }

  return (
    <Container py="16px">
      {data.map((item) =>
        <Button mb="8px" onPress={() => navigateTo(item?.opcoes)}>{item?.descricao}</Button>
      )}
    </Container>
  )
}

export default Prophylaxis
