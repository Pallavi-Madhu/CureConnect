import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import UniversalNavi from './Navigation/Universal';
import { lightTheme } from './Theme/lightTheme';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
  style={{ flex: 1, backgroundColor: lightTheme.colors.background }}
  edges={['top', 'bottom']}   // 👈 fill both top & bottom safe areas
>
    <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
        <StatusBar
          barStyle="dark-content"    
          backgroundColor={lightTheme.colors.background}
          translucent={true}
        />
        <NavigationContainer theme={lightTheme}>
          <UniversalNavi />
        </NavigationContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
