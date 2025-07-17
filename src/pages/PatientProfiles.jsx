import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';

export default function PatientProfile({ route }) {
  const { colors } = useTheme();
  const { patient } = route.params; // 👈 get the patient object

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top', 'bottom']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={{ uri: patient.avatar }} style={styles.avatar} />
          <Text style={[styles.name, { color: colors.text }]}>{patient.name}</Text>
          <Text style={[styles.subtext, { color: colors.primary }]}>Patient</Text>
        </View>
        {/* Info card */}
        <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.background }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>Basic Information</Text>
          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: colors.text }]}>Age:</Text>
            <Text style={[styles.value, { color: colors.text }]}>{patient.age}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: colors.text }]}>Blood Group:</Text>
            <Text style={[styles.value, { color: colors.text }]}>{patient.blood}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={[styles.label, { color: colors.text }]}>Contact:</Text>
            <Text style={[styles.value, { color: colors.primary }]}>+91 98765 43210</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 16,
    marginTop: 4,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 1, // Android shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
  },
  value: {
    fontSize: 16,
  },
  noteText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
