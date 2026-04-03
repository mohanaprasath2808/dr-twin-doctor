import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../../constants/navigationStrings';
import Home from '../../screens/App/Home';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name={navigationStrings.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
