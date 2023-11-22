
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Auth/Login'
import Home from './src/Home/Home'
import CasesList from './src/Cases/List'
import CasesRegister from './src/Cases/Register'

const Stack = createNativeStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="CasesList" component={CasesList} />
    <Stack.Screen name="CasesRegister" component={CasesRegister} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
)

export default Routes
