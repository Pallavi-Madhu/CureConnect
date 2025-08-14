import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const PatientForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    patientid: '',
    fullName: '',
    age: '',
    gender: '',
    bloodgroup: '',
    contact: '',
    symptoms: '',
    genotype: '',
    RSID: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    
    const requiredFields = Object.keys(formData).filter((key) => key !== 'symptoms');//symptoms field is optional

    for (let field of requiredFields) {
      if (!formData[field].trim()) {
        Alert.alert('Validation Error', `${field} is required`);
        return;
      }
    }

    
    if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      Alert.alert('Validation Error', 'Age must be a positive number');
      return;
    }

    navigation.navigate('MainTabs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Patient Form</Text>

      {[
        { label: 'Patient ID', field: 'patientid' },
        { label: 'Full Name', field: 'fullName' },
        { label: 'Age', field: 'age' },
        { label: 'Gender', field: 'gender' },
        { label: 'Bloodgroup', field: 'bloodgroup' },
        { label: 'Contact Information', field: 'contact' },
        { label: 'Symptoms (Optional)', field: 'symptoms' }, 
        { label: 'Genotype', field: 'genotype' },
        { label: 'RSID', field: 'RSID' },
      ].map(({ label, field }) => (
        <View key={field} style={styles.inputContainer}>
          <Text>{label}:</Text>
          <TextInput
            style={styles.input}
            value={formData[field]}
            onChangeText={(text) => handleChange(field, text)}
          />
        </View>
      ))}

      <Button title="Submit" onPress={handleSubmit} color="#52a8dd" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: '#52a8dd',
    textAlign: 'center',
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  },
});

export default PatientForm;
