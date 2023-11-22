import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import{ SafeAreaView } from 'react-native';
import Details from "./Details";
import Home from "./Home";

const Stack = createStackNavigator()


function App3(){
    return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Details" component={Details}/>

            
            
          </Stack.Navigator>
          

        </NavigationContainer>
    )
}
export default App3