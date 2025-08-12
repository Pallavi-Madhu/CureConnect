import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./RootNavigator.js";
import AuthStack from "./AuthStack.js";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const {user} = useSelector((state) => state.user || {})
console.warn(user)

const UniversalNavi = () => {
  //const isLoggedIn = false; // Replace with true to go to main pages for the time being-

  return (
    <Stack.Navigator>
        {user? (
          <Stack.Screen name="RootNavigator" component={RootNavigator} options={{ headerShown: false }}/>
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }}
          />
        )}
    </Stack.Navigator>
  );
};

export default UniversalNavi;
