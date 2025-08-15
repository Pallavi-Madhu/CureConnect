import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image, 
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../../Store/AuthThunk";
import Icon from "react-native-vector-icons/Ionicons";
import Toast from "react-native-toast-message";


const showToast = (message) => {
  Toast.show({
    type: "error",
    text1: message,
    position: "top",
  });
};

const SignUp = () => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { user, session, loading, error } = useSelector(
    (state) => state.user || {}
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignUp = async () => {
    console.warn("hi")
    try {
      if (!name || !email || !password || !confirmpass) {
        showToast("Please fill in all the fields"); 
        return;
      }

      if (password !== confirmpass) {
        showToast("Passwords do not match"); 
        return;
      }

      const result = await dispatch(signUp({ email, password, name })).unwrap();
      console.warn(result)


      if (result && result.success) {
        alert("Account created successfully! Please sign in");
        navigation.navigate("SignIn"); 
      } else {
        const errorMessage =
          (result && result.error) || (result && result.payload?.message) || "Failed to create account";
        showToast(errorMessage);
      }
    } catch (error) {
      showToast(error.message || "An unexpected error occurred");
    }
  };


  const iconContainer = {
    position: "absolute",
    right: 15,
    top: 20,
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>CureConnect</Text>

          {loading ? (
            <ActivityIndicator size="large" color="#005b96" />
          ) : (

            <>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#888"
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#888"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="black"
                  secureTextEntry={!showPassword}
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={iconContainer}>
                  <Icon
                    name={showPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TextInput
                  placeholder="Confirm Password"
                  placeholderTextColor="#888"
                  secureTextEntry={!showConfirmPassword}
                  style={styles.input}

                  value={confirmpass}
                  onChangeText={setConfirmPass}
                />
                <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={iconContainer}>
                  <Icon
                    name={showConfirmPassword ? "eye-off" : "eye"}
                    size={24}
                    color="#888"
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}

          <Text style={styles.bottomText}>
            Already have an account?{" "}
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#011f4b",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 16,
    width: "85%",
    alignItems: "center",
    elevation: 8,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#005b96",
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    
    borderRadius: 8,
    padding: 10,
    paddingRight: 40, 
    marginVertical: 6,
    color: "#005b96",
  },
  loginBtn: {
    backgroundColor: "#005b96",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
  },
  bottomText: {
    marginTop: 16,
    fontSize: 14,
    color: "#4B5563",
  },
  signupText: {
    color: "#005b96",
    fontWeight: "600",
  },
});

export default SignUp;