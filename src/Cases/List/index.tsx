import { Container, List } from '../../components'

import ListItem from './ListItem'

const data = [
  { id: 1, label: 'Case 1', type: 'type 1' },
  { id: 2, label: 'Case 2', type: 'type 2' }
]

const CasesList = () => {
  const renderComponent = ({ item }) => (
    <ListItem {...item} />
  )

  return (
    <Container>
      <List data={data} renderComponent={renderComponent} />
    </Container>
  )
}

export default CasesList
