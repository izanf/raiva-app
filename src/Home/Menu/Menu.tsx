import Box from '../../components/Box'

import MenuItem from './MenuItem'

const Menu = ({ data, navigation }) => {
  return (
    <Box flexDirection="row" flexWrap="wrap" gap="8px">
      {data.map((item) => (
        <MenuItem key={item.title} navigation={navigation} {...item} />
      ))}
    </Box>
  )
}

export default Menu
