import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Stack, useRouter } from 'expo-router';

export default function Student() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <Stack.Screen
        options={{
          title: "Class Section"
        }}
      />

      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>For Faculty</Text>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});