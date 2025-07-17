import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTab from "./MainTab.js";
import PatientProfiles from "../src/pages/PatientProfiles.jsx"
import DonorProfile from "../src/pages/DonorProfiles.jsx";
import Landing from "../src/pages/Landing.jsx";
// import Auth from "../src/pages/Auth.jsx";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown : false}}>
            <Stack.Screen name = "Landing" component = {Landing}/>
            {/* <Stack.Screen name = "Auth" component = {Auth}/> */}
            <Stack.Screen name = "MainTabs" component = {MainTab}/>
            <Stack.Screen name = "PatientProfiles" component = {PatientProfiles}/>
            <Stack.Screen name = "DonorProfile" component = {DonorProfile}/>
        </Stack.Navigator>
    )
}
export default RootNavigator;