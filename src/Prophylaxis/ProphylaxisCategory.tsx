import { darken, lighten } from 'polished'

import styled from 'styled-components'

import Container from '../components/Container'

import { Box, Text } from '../components'
import { useState } from 'react'

const CollapseContainer = styled(Box)`
  background: ${({ theme }) => lighten(0.1, theme.colors.gray)};
  border-radius: 8px;
`

const CollapseHeader = styled.Pressable`
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`

const ProphylaxisCategory = ({ route }) => {
  const [openedIndex, setOpened] = useState(-1)
  const { data = [] } = route?.params

  const handleOpen = (index) => {
    setOpened(index === openedIndex ? -1 : index)
  }

  return (
    <Container>
      {data.map((item, index) => (
        <CollapseContainer key={index} mb="8px">
          <CollapseHeader
            onPress={() => handleOpen(index)}
          >
            <Text>
              {item?.animal}
            </Text>
          </CollapseHeader>
          {openedIndex === index && (
            <Box p="8px">
              <Text>{item?.recomendacao}</Text>
            </Box>
          )}
        </CollapseContainer>
      ))}
    </Container>
  )
}

export default ProphylaxisCategory
