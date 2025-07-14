import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../src/pages/Home";
import Patient from "../src/pages/Patient";
import Donor from "../src/pages/Donor";
import Settings from "../src/pages/Settings";
const Tab = createBottomTabNavigator();
const MainTab = () => {
    return(
        <>
        <Tab.Navigator
            screenOptions = {({route}) => {
                let iconName;
                if (route.name === "Home") iconName = "home-outline";
                else if (route.name === "Patient") iconName ="account-outline";
                else if (route.name === "Donor") iconName = "heart-plus-outline";
                else if (route.name === "Settings") iconName = "cog-outline";

                return {
                    tabBarIcon: ({ color, size }) => (
                    <Icon name={iconName} size={size} color={color} />
                    ),
                    headerShown: false,
                    tabBarStyle: {
                    height: 55,
                    padding: "auto"
                    },
                    tabBarSafeAreaInsets: { bottom: 8 },
                };
            }}
            initialRouteName = "Home"
        >
            <Tab.Screen name = "Home" component={Home} />
            <Tab.Screen name = "Patient" component ={Patient} />
            <Tab.Screen name = "Donor" component={Donor} />
            <Tab.Screen name = "Settings" component ={Settings} />
        </Tab.Navigator>
        </>
    );
};
export default MainTab;