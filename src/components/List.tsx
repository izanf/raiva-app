import { FlatList } from 'react-native'

const List = ({ data, renderComponent, ...props }) => (
  <FlatList
    data={data}
    renderItem={renderComponent}
    keyExtractor={item => item.id}
    {...props}
  />
)

export default List
