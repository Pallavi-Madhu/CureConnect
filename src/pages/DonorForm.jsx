import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const DonorForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    bloodGroup: '',
    contact: '',
    dnaSequence: '',
    healthConditions: '',
    diseaseCarriers: '',
    relevantChemicals: '',
    omimIDs: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    //ToDo: send formdata to backend
    navigation.navigate('MainTabs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Donor Form</Text>

      {[
        { label: 'Full Name', field: 'fullName' },
        { label: 'Age', field: 'age' },
        { label: 'Gender', field: 'gender' },
        { label: 'Blood Group', field: 'bloodGroup' },
        { label: 'Contact Information', field: 'contact' },
        { label: 'DNA Sequence', field: 'dnaSequence' },
        { label: 'Health Conditions', field: 'healthConditions' },
        { label: 'Known Disease Carriers / Risk Factors', field: 'diseaseCarriers' },
        { label: 'Relevant Chemicals', field: 'relevantChemicals' },
        { label: 'OMIM IDs', field: 'omimIDs' },
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

export default DonorForm;
