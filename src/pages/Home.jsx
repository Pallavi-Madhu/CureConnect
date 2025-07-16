import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Alert} from 'react-native';

const Home = ({ navigation }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  appTitle: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#52a8dd',
    marginBottom: 200,
    fontFamily: 'cursive',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 40,
    color: '#52a8dd'
  },
  button: {
    backgroundColor: '#52a8ddff', // light blue
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
