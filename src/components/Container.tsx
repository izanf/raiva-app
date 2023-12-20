import styled from 'styled-components/native'

import Box from './Box'

const Container = styled(Box).attrs({
  p: 16
})`
`

export const ScrollContainer = styled.ScrollView`
  padding: 16px;
`

export default Container
