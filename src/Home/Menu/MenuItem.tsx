import styled from 'styled-components/native'

import { Icon, Text } from '../../components'

const Touchable = styled.TouchableOpacity<{ parentWidth: number }>`
  flex: 1;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  alignItems: center;
`

const MenuItem = ({ iconName, title, path, navigation, parentWidth }) => (
  <Touchable onPress={() => navigation.navigate(path)} parentWidth={parentWidth}>
    <Icon name={iconName} size="48px" />
    <Text pt="16px" textAlign="center">{title}</Text>
  </Touchable>
)

export default MenuItem
