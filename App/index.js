import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Feed } from "./screens/Feed";

const AppStack = createStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Feed"
      component={Feed}
      options={() => ({
        headerTitle: "Home",
      })}
    />
  </AppStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <AppStackScreen />
  </NavigationContainer>
);
