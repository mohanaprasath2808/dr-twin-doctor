import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Auth/Login";
import navigationStrings from "../../constants/navigationStrings";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerTitleAlign:'center',
            headerShadowVisible:false,
            headerBackButtonDisplayMode: 'minimal',
        }}
        >
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack;
