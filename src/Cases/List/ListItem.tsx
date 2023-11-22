import styled from 'styled-components/native'

import { Box, Text, Icon } from '../../components'

const IdWrapper = styled(Box)`
  background: yellow;
  border-radius: 100%;
  padding: 8px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
`

const ListItem = ({ id, label, type }) => (
  <Box flexDirection="row" alignItems="center" mb="8px">
    <IdWrapper>
      <Text>{id}</Text>
    </IdWrapper>
    <Text flex="1" pl="8px">{label}</Text>
    <Icon name="arrow-right" />
  </Box>
)

export default ListItem