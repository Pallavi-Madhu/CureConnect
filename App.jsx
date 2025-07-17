import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import UniversalNavi from './Navigation/Universal';
import { lightTheme } from './Theme/lightTheme';
import { DarkTheme } from '@react-navigation/native';

export default function App() {
  return (
     <NavigationContainer theme={lightTheme}>
      <UniversalNavi />
        <StatusBar style="auto" />
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
