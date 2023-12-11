import styled from 'styled-components/native'

import Box from './Box'
import Text from './Text'

const InputRAW = styled.TextInput<{ borderColor: string }>`
  padding: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`

const Input = ({ label, error,...props }) => {
  const getStatus = () => {
    if (error) return 'danger'

    return 'gray'
  }

return (
    <Box>
      <Text fontSize="12">{label}</Text>
      <InputRAW {...props} onChangeText={props.onChange} borderColor={getStatus()} />
    </Box>
  )
}

export default Input
