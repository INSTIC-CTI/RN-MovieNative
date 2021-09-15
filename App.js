import React from "react";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./components/Navigation";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navigation navigation={navigation}/>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
