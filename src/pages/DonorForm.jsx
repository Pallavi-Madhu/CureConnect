import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const DonorForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    donorID: '',
    fullName: '',
    age: '',
    gender: '',
    bloodGroup: '',
    contact: '',
    genotype: '',
    RSID: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    //ToDo: send formdata to backend

    const requiredFields = Object.keys(formData)

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
      <Text style={styles.title}>Donor Form</Text>

      {[
        { label: 'Donor ID', field: 'donorID' },
        { label: 'Full Name', field: 'fullName' },
        { label: 'Age', field: 'age' },
        { label: 'Gender', field: 'gender' },
        { label: 'Blood Group', field: 'bloodGroup' },
        { label: 'Contact Information', field: 'contact' },
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

export default DonorForm;
