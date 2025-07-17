// PatientsList.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

const dummyPatients = [
  { id: '1', name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=12', age: 32, blood: 'O+' },
  { id: '2', name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=20', age: 28, blood: 'A-' },
  { id: '3', name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?img=30', age: 40, blood: 'B+' },
];

const PatientsList = () => {

  const { colors } = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
  container: { flex: 1 },
  headingContainer: {
  marginBottom: 16,
  paddingHorizontal: 16,
},
headingText: {
  fontSize: 30,
  fontWeight: '700',
  paddingTop:20,
  paddingLeft:12
},
subHeadingText: {
  fontSize: 14,
  fontWeight: '500',
  paddingBottom:10,
  paddingLeft:12
},
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  info: { flex: 1 },
  name: { fontSize: 18, fontWeight: '600' },
  details: { fontSize: 14, marginTop: 4 },
});

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.background }]}
      onPress={() => navigation.navigate('PatientProfiles', { patient: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.details, { color: colors.text }]}>
          Age: {item.age} • Blood: {item.blood}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headingContainer}>
  <Text style={[styles.headingText, { color: colors.text }]}>Patient Profiles</Text>
  <Text style={[styles.subHeadingText, { color: colors.primary }]}>
    Tap a profile to view details
  </Text>
</View>

      <FlatList
        data={dummyPatients}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

export default PatientsList;