import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

const dummyDonors = [
  { id: '1', name: 'Arun Kumar', avatar: 'https://i.pravatar.cc/150?img=5', blood: 'A+', city: 'Chennai' },
  { id: '2', name: 'Meera Patel', avatar: 'https://i.pravatar.cc/150?img=15', blood: 'O-', city: 'Bangalore' },
  { id: '3', name: 'Ravi Sharma', avatar: 'https://i.pravatar.cc/150?img=25', blood: 'B+', city: 'Hyderabad' },
];

const DonorsList = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    padding: 16,
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    marginTop: 4,
  },
});

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.background }]}
      onPress={() => navigation.navigate('DonorProfile', { donor: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.details, { color: colors.text }]}>
          Blood: {item.blood} • {item.city}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.headingContainer}>
        <Text style={[styles.headingText, { color: colors.text }]}>Donors</Text>
        <Text style={[styles.subHeadingText, { color: colors.primary }]}>Find a matching donor</Text>
      </View>
      <FlatList
        data={dummyDonors}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      />
    </View>
  );
};

export default DonorsList;