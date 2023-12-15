import { useState } from 'react'
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
  const [showError, setShowError] = useState(false)
  const getStatus = () => {
    if (showError && error) return 'danger'

    return 'gray'
  }

  const handleOnChange = (v) => {
    setShowError(false)
    props.onChange(v)
  }

  return (
    <Box>
      <Text fontSize="12">{label}</Text>
      <InputRAW {...props} onChangeText={props.onChange} borderColor={getStatus()} />
    </Box>
  )
}

export default Input
