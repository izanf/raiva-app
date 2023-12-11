import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import { AuthenticationProvider } from './src/state/auth'

import theme from './src/themes'

import Routes from './Routes'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AuthenticationProvider>
            <Routes />
          </AuthenticationProvider>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}
