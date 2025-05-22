import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button
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
          title: "Class Section",
        }}
      />

      <View style={styles.content}>
        <Text style={styles.headerText}>Available Survey Form</Text>
        <Text style={styles.filterLabel}>Student ID:</Text>
        <TextInput
          style={styles.textFieldInput}
          placeholder="**-*****"
          value={enteredStudentID}
          onChangeText={setStudentID}
        />

        <Text style={styles.filterLabel}>Specialization:</Text>
        <DropDownPicker
          open={open}
          value={selectedSpecialization}
          items={items}
          setOpen={setOpen}
          setValue={setselectedSpecialization}
          setItems={setItems}
          style={styles.dropdown}
          placeholder="All"
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "500",
  },
  optionsContainer: {
    padding: 20,
    gap: 20,
  },
  optionButton: {
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  surveyOptionContainer: {
    flexDirection: "column",
  },
  stemLabelText: {
    fontSize: 12,
    color: "#f44336",
    marginBottom: 4,
  },
    filterLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  textFieldInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#120438',
    borderRadius: 6,
    width: '60%',
    padding: 16,
    marginBottom: 10,

  },
    dropdown: {
    width: '60%',
    marginBottom: 10,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  dropdownContainer: {
    width: '60%',
    borderRadius: 6,
    borderColor: '#ccc',
  },
});
