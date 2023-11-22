import styled from 'styled-components/native'
import { space } from 'styled-system'

import Text from './Text'

const ButtonRAW = styled.TouchableOpacity`
  ${space}
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 32px;
`

const Button = ({ children, ...props }) => (
  <ButtonRAW {...props}>
    <Text textAlign="center" fontSize="16px" fontWeight="700" color="white">{children}</Text>
  </ButtonRAW>
)

export default Button
