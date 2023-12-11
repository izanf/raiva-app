import styled from 'styled-components/native'

import { Icon, Text } from '../../components'

const Touchable = styled.TouchableOpacity<{ parentWidth: number }>`
  flex: 1;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 16px;
  alignItems: center;
  background: ${({ theme }) => theme.colors.primary};
  min-width: 150px;
`

const MenuItem = ({ iconName, title, path, navigation, parentWidth }) => (
  <Touchable onPress={() => navigation.navigate(path)} parentWidth={parentWidth}>
    <Icon name={iconName} size={48} color="white" />
    <Text pt="16px" fontWeight="bold" textAlign="center">{title}</Text>
  </Touchable>
)

export default MenuItem
