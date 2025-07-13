import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./RootNavigator.js";

const Stack = createStackNavigator();
const UniversalNavi = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen
          name="RootNavigator"
          component={RootNavigator}
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
};
export default UniversalNavi;
