import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTab from "./MainTab.js";
import Profiles from "../src/pages/Profiles.jsx"

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown : false}}>
            <Stack.Screen name = "MainTabs" component = {MainTab}/>
            <Stack.Screen name = "Profiles" component = {Profiles}/>
        </Stack.Navigator>
    )
}
export default RootNavigator;