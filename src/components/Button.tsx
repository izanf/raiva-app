import styled from 'styled-components/native'
import { space } from 'styled-system'

import Loading from './Loading'
import Text from './Text'

const ButtonRAW = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${space}
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  border-radius: 32px;
`

const Button = ({ children, isLoading, ...props }) => (
  <ButtonRAW {...props}>
    <Text textAlign="center" fontSize="16px" fontWeight="700" color="white">{children}</Text>
    {isLoading && <Loading color="white" ml="16px" />}
  </ButtonRAW>
)

export default Button
