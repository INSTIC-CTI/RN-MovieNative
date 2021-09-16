import React from "react";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./components/Navigation";
import Search from "./screens/Search";

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
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerTransparent: true,
            header: ({navigation}) => <Navigation navigation={navigation}/>,
          }}
        />
    </NavigationContainer>
  );
};

export default App;
