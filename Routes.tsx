
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Auth/Login'
import Home from './src/Home/Home'
import CasesList from './src/Cases/List'
import CasesRegister from './src/Cases/Register'
import HealthUnits from './src/HealthUnits/HealthUnits'
import Prophylaxis from './src/Prophylaxis/Prophylaxis'
import ProphylaxisCategory from './src/Prophylaxis/ProphylaxisCategory'

import useAuthentication from './src/state/auth'

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
          <Stack.Screen name="HealthUnits" component={HealthUnits} />
          <Stack.Screen name="Prophylaxis" component={Prophylaxis} />
          <Stack.Screen name="ProphylaxisCategory" component={ProphylaxisCategory} />
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
