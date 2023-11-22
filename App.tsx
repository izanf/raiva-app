import { SafeAreaView } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';

import theme from './src/themes'

import Routes from './Routes'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaView>
  )
}
