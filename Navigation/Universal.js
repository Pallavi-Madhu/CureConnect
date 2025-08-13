import {React, useEffect} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RootNavigator from "./RootNavigator.js";
import AuthStack from "./AuthStack.js";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../Store/AuthThunk.js";

const Stack = createStackNavigator();



const UniversalNavi = () => {
  const dispatch = useDispatch();
  //const isLoggedIn = false; // Replace with true to go to main pages for the time being-
  const {user} = useSelector((state) => state.user || {})
   useEffect(() => {
      dispatch(loadUser());
    }, [dispatch]);

  console.warn(user)

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
