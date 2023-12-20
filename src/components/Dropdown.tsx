import { useState } from 'react'
import styled from 'styled-components/native'

import Box from './Box'
import Text from './Text'

const Wrapper = styled(Box)``

const InputWrapper = styled(Box) <{ borderColor: string }>`
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`

const OptionsWrapper = styled(Box)`
  width: 100%;
`

const PressablePlaceholder = styled.Pressable`
`

const PressableItem = styled.Pressable<{ isLast: boolean }>`
  padding-vertical: 16px;

  ${({ isLast, theme }) => !isLast ? `
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme.colors.gray};
  ` : ''}
`

const Dropdown = ({ options, value, label, onChange, error, ...props }: { onChange: (v: string) => void, error?: string, options: any[], value: any, label: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showError, setShowError] = useState(false)
  const [selected, setSelected] = useState(null)

  const getStatus = () => {
    if (showError && error) return 'danger'

    return 'gray'
  }

  const handleOnChange = (item: any) => {
    setSelected(item.label)
    onChange(item.value)
    setShowError(false)
    setIsOpen(false)
  }

  return (
    <Wrapper>
      <Text fontSize="12px">{label}</Text>
      <InputWrapper px="16px" {...props} borderColor={getStatus()}>
        <PressablePlaceholder onPress={() => setIsOpen(!isOpen)}>
          <Text py="16px">{selected || 'Selecione uma opção'}</Text>
        </PressablePlaceholder>
        {isOpen && (
          <OptionsWrapper>
            {options?.map((item, index) => (
              <PressableItem key={index} onPress={() => handleOnChange(item)} isLast={index === options.length - 1}>
                <Text px="8px">{item.label}</Text>
              </PressableItem>
            ))}
          </OptionsWrapper>
        )}
      </InputWrapper>
    </Wrapper>
  )
}

export default Dropdown
