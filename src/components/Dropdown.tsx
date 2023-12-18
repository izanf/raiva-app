import { useState } from 'react'
import styled from 'styled-components/native'

import Box from './Box'
import Text from './Text'

const Wrapper = styled(Box)`
  position: relative;
`

const OptionsWrapper = styled(Box)`
  width: 100%;
  position: absolute;
  top: 100%;
  background: white;
`

const PressablePlaceholder = styled.Pressable<{ borderColor: string }>`
  padding: 16px;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`

const PressableItem = styled.Pressable<{ isLast: boolean }>`
  padding: 8px 16px;

  ${({ isLast, theme }) => !isLast ? `
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme.colors.black};
  ` : ''}
`

const Dropdown = ({ options, onChange, error, ...props }: { onChange: (v: string) => void, error?: string, options: any[] }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showError, setShowError] = useState(false)

  const getStatus = () => {
    if (showError && error) return 'danger'

    return 'gray'
  }

  const handleOnChange = (value: string) => {
    setShowError(false)
    onChange(value)
  }

  return (
    <Wrapper {...props}>
      <PressablePlaceholder onPress={() => setIsOpen(!isOpen)} borderColor={getStatus()}>
        <Text>Select an element</Text>
      </PressablePlaceholder>
      {isOpen && (
        <OptionsWrapper style={{ zIndex: -5 }}>
          {options?.map(({ label, value }, index) => (
            <PressableItem onPress={() => handleOnChange(value)} isLast={index === options.length - 1}>
              <Text>{label}</Text>
            </PressableItem>
          ))}
        </OptionsWrapper>
      )}
    </Wrapper>
  )
}

export default Dropdown
