import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import ResultScreen from "./ResultScreen";

const myStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <myStack.Navigator initialRouteName="HomeScreen">
        <myStack.Screen name="HomeScreen" component={HomeScreen} />
        <myStack.Screen name="ResultScreen" component={ResultScreen} />
      </myStack.Navigator>
    </NavigationContainer>
  );
}
