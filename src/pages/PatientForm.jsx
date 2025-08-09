import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

const PatientForm = ({ navigation }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    contact: '',
    symptoms: '',
    dnaSequence: '',
    familyHistory: '',
    omimIDs: '',
    pubmedRefs: '',
    directEvidence: '',
    inferenceGeneSymbols: '',
    inferenceScore: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // TODO: send formData to backend
    navigation.navigate('MainTabs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Patient Form</Text>

      {[
        { label: 'Full Name', field: 'fullName' },
        { label: 'Age', field: 'age' },
        { label: 'Gender', field: 'gender' },
        { label: 'Contact Information', field: 'contact' },
        { label: 'Symptoms', field: 'symptoms' },
        { label: 'DNA Sequence', field: 'dnaSequence' },
        { label: 'Family Medical History', field: 'familyHistory' },
        { label: 'OMIM IDs (optional)', field: 'omimIDs' },
        { label: 'PubMed References (optional, comma-separated)', field: 'pubmedRefs' },
        { label: 'Direct Evidence Notes', field: 'directEvidence' },
        { label: 'Inference Gene Symbol(s)', field: 'inferenceGeneSymbols' },
        { label: 'Inference Score (optional)', field: 'inferenceScore' },
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
