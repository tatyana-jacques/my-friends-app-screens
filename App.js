import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "./src/pages/Login/Login"
import Home from "./src/pages/Home/Home"
import Registration from "./src/pages/Registration/Registration"
import Google from "./src/pages/Google/Google"

const Stack = createStackNavigator()

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name= "Home" 
        component = {Home}
        options = {
          {headerShown: false}
        }/>
        <Stack.Screen 
        name= "Login" 
        component = {Login}
        options = {
          {headerShown: false}
        }
        
        />
        <Stack.Screen 
        name= "Registration" 
        component = {Registration}
        options = {
          {headerShown: false}
        }/>
        <Stack.Screen 
        name= "Google" 
        component = {Google}
        options = {
          {headerShown: false}
        }/>

      </Stack.Navigator>

    </NavigationContainer>
  )
}