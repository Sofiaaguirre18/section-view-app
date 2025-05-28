import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Stack, useRouter } from "expo-router";

export default function classList() {
  const router = useRouter();
  const [enteredStudentID, setStudentID] = useState("");
  const [selectedSpecialization, setselectedSpecialization] = useState("");

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "All", value: "All" },
    { label: "Science", value: "Science" },
    { label: "Engineering", value: "Engineering" },
  ]);

  function handleStudentInput() {
    studentInput(enteredStudentID, selectedSpecialization);
    resetForm();
  }

  function resetForm() {
    setStudentID("");
    setselectedSpecialization("");
  }

  function cancelHandler() {
    setModalIsVisible(false);
    resetForm();
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header Title */}
      <Stack.Screen
        options={{
          title: "STEM Specialization",
        }}
      />

      <View style={styles.content}>
        <Text style={styles.headerText}>Fill up the following:</Text>
        
        {/* Student ID Field */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>STUDENT ID:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="**-*****"
            value={enteredStudentID}
            onChangeText={setStudentID}
          />
        </View>

        {/* Specialization Dropdown */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>SELECT SPECIALIZATION:</Text>
          <DropDownPicker
            open={open}
            value={selectedSpecialization}
            items={items}
            setOpen={setOpen}
            setValue={setselectedSpecialization}
            setItems={setItems}
            style={styles.dropdown}
            placeholder="Select"
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            placeholderStyle={styles.placeholderStyle}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleStudentInput}
          >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => router.push("/")}
          >
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    height: 45,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 4,
    height: 45,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderStyle: {
    color: '#999',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 40,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 4,
    marginBottom: 15,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    paddingVertical: 15,
    borderRadius: 4,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});