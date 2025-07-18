import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Alert} from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

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
      <Text style={styles.appTitle}>CureConnect</Text>
      <Text style={styles.welcome}>Welcome to CureConnect!</Text>
      <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('PatientForms');
          }}
        >
        <Text style={styles.buttonText}>Set Up Patient Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('DonorForms'); 
          }}
        >
          <Text style={styles.buttonText}>Set Up Donor Profile</Text>
        </TouchableOpacity>

            </View>
          );
        }

export default Home;

  