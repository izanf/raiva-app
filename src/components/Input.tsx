import styled from 'styled-components/native'

import Box from './Box'
import Text from './Text'

const InputRAW = styled.TextInput`
  padding: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`

const Input = ({ label, ...props }) => {
  return (
    <Box>
      <Text fontSize="12">{label}</Text>
      <InputRAW {...props} onChangeText={props.onChange} />
    </Box>
  )
}

export default Input
