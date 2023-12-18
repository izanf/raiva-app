import styled from 'styled-components/native'
import { space, flexbox, FlexboxProps, grid, GridProps, SpaceProps } from 'styled-system'

interface BoxProps extends FlexboxProps, GridProps, SpaceProps {
}

const Box = styled.View<BoxProps>`
  ${space}
  ${flexbox}
  ${grid}
`

export default Box
