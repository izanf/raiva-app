import styled from 'styled-components/native'

import { TypographyProps, typography, SpaceProps, space } from 'styled-system'

interface TextProps extends TypographyProps, SpaceProps {
  color?: string
}

const Text = styled.Text<TextProps>`
  ${typography}
  ${space}
  color: ${({ theme, color }) => theme.colors[color ?? 'black']};
`

export default Text
