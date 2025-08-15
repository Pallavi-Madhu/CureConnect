import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../src/pages/Authentication/SignIn";
import SignUp from "../src/pages/Authentication/SignUp";

const Stack = createStackNavigator();
const AuthStack = () => {


    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "SignIn"
                component = {SignIn}
                options = {{headerShown : false}}
            />
            <Stack.Screen 
                name = "SignUp"
                component = {SignUp}
                options = {{headerShown : false}}
            />
        </Stack.Navigator>
    )
}
export default AuthStack;