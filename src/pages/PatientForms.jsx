import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const PatientForms = () => {
    return(
        <View style={styles.container}>
            <Text>Forms page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
})
export default PatientForms;