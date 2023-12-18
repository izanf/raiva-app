import { ActivityIndicatorProps } from "react-native"
import styled from 'styled-components/native'
import { space } from 'styled-system'

import theme from '../themes'
import Box from "./Box"

const Indicator = styled.ActivityIndicator`
  ${space}
`

const Loading = ({ color, size, ...props }: ActivityIndicatorProps & { color?: string }) => {
  return <Indicator color={theme.colors[color || 'primary']} size={size || 'small'} {...props} />
}

export const LoadingScreen = () => {
  return (
    <Box justifyContent="center" alignItems="center" height="100%">
      <Loading size="large" />
    </Box>
  )
}

export default Loading
