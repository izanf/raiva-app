
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Auth/Login'
import Home from './src/Home/Home'
import CasesList from './src/Cases/List'
import CasesRegister from './src/Cases/Register'
import Prophylaxis from './src/Prophylaxis/Prophylaxis'
import useAuthentication from './src/state/auth';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { user } = useAuthentication()

  return (
    <Stack.Navigator>
      {!!user ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CasesList" component={CasesList} />
          <Stack.Screen name="CasesRegister" component={CasesRegister} />
          <Stack.Screen name="Prophylaxis" component={Prophylaxis} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default Routes
