import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import ResultScreen from "./ResultScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "IS6144 Mock String App" }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: "Result Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
