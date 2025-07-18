import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTab from "./MainTab.js";
import PatientProfiles from "../src/pages/PatientProfiles.jsx"
import DonorProfile from "../src/pages/DonorProfiles.jsx";
import Landing from "../src/pages/Landing.jsx";
import SignIn from "../src/pages/SignIn.jsx";
import SignUp from "../src/pages/SignUp.jsx";
import PatientForms from "../src/pages/PatientForms.jsx";
import DonorForms from "../src/pages/DonorForms.jsx";


const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{ headerShown : false}}>
            <Stack.Screen name = "Landing" component = {Landing}/>
            <Stack.Screen name = "SignIn" component = {SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name = "MainTabs" component = {MainTab}/>
            <Stack.Screen name = "PatientProfiles" component = {PatientProfiles}/>
            <Stack.Screen name = "DonorProfile" component = {DonorProfile}/>
            <Stack.Screen name = "PatientForms" component = {PatientForms}/>
            <Stack.Screen name = "DonorForms" component = {DonorForms}/>
        </Stack.Navigator>
    )
}
export default RootNavigator;