import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import DNA from "../../assets/images/logo.png"; // <-- now it's an image path

const Landing = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainTabs");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={style.container}>
      <Image source={DNA} style={style.logo} /> 
    </View>
  );
};

export default Landing;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,   // adjust as needed
    height: 120,  // adjust as needed
    resizeMode: 'contain',
  },
});
