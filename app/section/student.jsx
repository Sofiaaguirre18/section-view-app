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
        <Text style={styles.welcomeText}>Quick access to your student tools:</Text>
      </View>

      <View style={styles.optionsContainer}>
        {/* Find my section */}
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => router.push('/section/SectionList')}
        >
          <View style={styles.optionContent}>
            <Text style={styles.optionText}>View Section</Text>
          </View>
        </TouchableOpacity>

        {/* Answer Survey */}
        <Text style={styles.stemLabelText}>For STEM students only.</Text>
        <TouchableOpacity 
          style={styles.optionButton}
          onPress={() => router.push('/section/specializationForm')}
        >
          <View style={styles.optionContent}>
            <View style={styles.surveyOptionContainer}>
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
    marginBottom: 20,
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 20,
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
    borderRadius: 2,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: '20%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    borderLeftWidth: 6,
    borderLeftColor: "#B92F2F",
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
    color: '#B92F2F',
    marginTop: 20,
    marginHorizontal: '5%',
  },
});