import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignIn = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>CureConnect</Text>

        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity onPress={() => {/* handle forgot */}}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>
          Not a member?{' '}
          <Text
            style={styles.signupText}
            onPress={() => navigation.navigate('SignUp')} 
          >
            Signup
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011f4b', // blue-800
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    width: '85%',
    alignItems: 'center',
    elevation: 8,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#005b96', // gray-800
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#005b96', // blue-600
    marginTop: 4,
    marginBottom: 12,
  },
  loginBtn: {
    backgroundColor: '#005b96',
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
  },
  bottomText: {
    marginTop: 16,
    fontSize: 14,
    color: '#4B5563', // gray-600
  },
  signupText: {
    color: '#005b96',
    fontWeight: '600',
  },
});
