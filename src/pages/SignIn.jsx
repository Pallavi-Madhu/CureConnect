import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image, 
  ActivityIndicator, 
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from "../../../Store/AuthThunk";

const SignIn = () => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); 
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      dispatch(showToast({ Title: "Email and password are required", message: "" }));
      return;
    }

    try {
      setLoading(true);
      const result = await dispatch(signIn({ email, password })).unwrap();

      if (result.success) {
        const { user, session } = result;
        dispatch(setUser(user));
      } else {
        const errorMessage = result.error || "Failed to sign in";
        dispatch(showToast({ Title: errorMessage, message: "" }));
      }
    } catch (error) {
      const errorMessage =
        typeof error === "object" && error !== null
          ? error.error || error.message || "An unexpected error occurred"
          : "An unexpected error occurred";
      dispatch(showToast({ Title: errorMessage, message: "" }));
    } finally {
      setLoading(false);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#011f4b', 
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
      color: '#005b96',
    },
    input: {
      width: '100%',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      marginVertical: 6,
      color: '#005b96',
    },
    forgotText: {
      alignSelf: 'flex-end',
      color: '#005b96', 
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
      color: 'black',
      fontWeight: '600',
    },
    bottomText: {
      marginTop: 16,
      fontSize: 14,
      color: '#4B5563',
    },
    signupText: {
      color: '#005b96',
      fontWeight: '600',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.title}>CureConnect</Text>

        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#888"
          style={styles.input}
          value={email} 
          onChangeText={setEmail} 
          keyboardType="email-address" 
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword} 
          style={styles.input}
          value={password} 
          onChangeText={setPassword} 
        />

        <TouchableOpacity onPress={() => {/* handle forgot */}}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignIn} disabled={loading}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
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