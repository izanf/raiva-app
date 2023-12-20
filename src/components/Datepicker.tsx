import { useState } from 'react'
import styled from 'styled-components/native'
import DatePicker from 'react-native-date-picker'

import Box from './Box'
import Text from './Text'

const Wrapper = styled(Box)``

const InputWrapper = styled(Box) <{ borderColor: string }>`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`

const PressablePlaceholder = styled.Pressable`
`

const Datepicker = ({ label, value, error, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(new Date())
  const [showError, setShowError] = useState(false)

  const getStatus = () => {
    if (showError && error) return 'danger'

    return 'gray'
  }

  const handleChange = (date) => {
    setIsOpen(false)
    onChange(date)
    setSelected(date)
  }

  return (
    <Wrapper>
      <Text fontSize="12px">{label}</Text>
      <InputWrapper borderColor={getStatus()} px="16px">
        <PressablePlaceholder onPress={() => setIsOpen(!isOpen)}>
          <Text py="16px">{new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short', timeStyle: 'short' }).format(selected)}</Text>
        </PressablePlaceholder>
      </InputWrapper>

      <DatePicker
        modal
        open={isOpen}
        date={selected}
        onConfirm={handleChange}
        onCancel={() => setIsOpen(false)}
      />
    </Wrapper>
  )
}

export default Datepicker