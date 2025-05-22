import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Student() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header Title */}
      <Stack.Screen
        options={{
          title: "Class Section"
        }}
      />

      {/* Welcome Text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Hello, What brings you here?</Text>
      </View>

      <View style={styles.optionsContainer}>
        {/* Find my section */}
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => router.push('/section/ClassList')}
        >
          <View style={styles.optionContent}>
            <Text style={styles.optionText}>View Section</Text>
          </View>
        </TouchableOpacity>

        {/* Answer Survey */}
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => router.push('/section/specializationForm')}
        >
          <View style={styles.optionContent}>
            <View style={styles.surveyOptionContainer}>
              <Text style={styles.stemLabelText}>For STEM students only.</Text>
              <Text style={styles.optionText}>Answer Survey</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '500',
  },
  optionsContainer: {
    padding: 20,
    gap: 20,
  },
  optionButton: {
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
  },
  surveyOptionContainer: {
    flexDirection: 'column',
  },
  stemLabelText: {
    fontSize: 12,
    color: '#f44336',
    marginBottom: 4,
  },
});