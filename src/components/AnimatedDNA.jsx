import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View, Image } from "react-native";

const AnimatedDNA = () => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/logo.png")}
        style={[styles.image, { transform: [{ rotate: rotation }] }]}
      />
    </View>
  );
};

export default AnimatedDNA;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
