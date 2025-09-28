import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { submitDonor } from '../../Store/DonorThunk';

const DonorForm = ({navigation}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    Donor_id: '',
    Name: '',
    Age: '',
    Gender: '',
    BloodGroup: '',
    Contact: '',
    Genotype: '',
    RSID: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    
    const requiredFields = Object.keys(formData)

    for (let field of requiredFields) {
          if (!formData[field].trim()) {
            Alert.alert('Validation Error', `${field} is required`);
            return;
          }
        }

     if (isNaN(formData.Age) || parseInt(formData.Age) <= 0) {
          Alert.alert('Validation Error', 'Age must be a positive number');
          return;
        }
    
    dispatch(submitDonor(formData));
    navigation.navigate('MainTabs');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Donor Form</Text>

      {[
        { label: 'Donor ID', field: 'Donor_id' },
        { label: 'Full Name', field: 'Name' },
        { label: 'Age', field: 'Age' },
        { label: 'Gender', field: 'Gender' },
        { label: 'Blood Group', field: 'BloodGroup' },
        { label: 'Contact Information', field: 'Contact' },
        { label: 'Genotype', field: 'Genotype' },
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
