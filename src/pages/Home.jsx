import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Alert} from 'react-native';
import { useTheme } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:colors.background,
    padding: 16,
  },
  appTitle: {
    fontSize: 70,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 200,
    fontFamily: 'cursive',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 40,
    color:colors.primary
  },
  button: {
    backgroundColor: colors.primary, // light blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.background,
    fontSize: 16,
  },
});

  return (
    <View style={styles.container}>
      {/* App title at the top */}
      <Text style={styles.appTitle}>CureConnect</Text>

      {/* Welcome text */}
      <Text style={styles.welcome}>Welcome to CureConnect!</Text>

      {/* Buttons */}
      <TouchableOpacity
  style={styles.button}
  onPress={() => {
    Alert.alert('Info', 'You can now create a patient profile');
    //navigation.navigate('PatientPage');// Uncomment this line if you have a Patient page
  }}
>
  <Text style={styles.buttonText}>Set Up Patient Profile</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => {
    Alert.alert('Info', 'You can now create a donor profile');
    //navigation.navigate('DonorPage'); // Uncomment this line if you have a Donor page
  }}
>
  <Text style={styles.buttonText}>Set Up Donor Profile</Text>
</TouchableOpacity>

    </View>
  );
};



export default Home;
