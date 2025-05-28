import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Stack, useRouter } from "expo-router";

export default function ClassList() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [open, setOpen] = useState(false);

  const [genderItems, setGenderItems] = useState([
    { label: "All", value: "All" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);

  const [students] = useState([
    { id: 1, studentId: "22-32295", name: "Aguirre, Princess Sofia P." },
    { id: 2, studentId: "22-33362", name: "San Esteban, Annemory O." },
    { id: 3, studentId: "22-32216", name: "Carullo, Andrei" },
    { id: 4, studentId: "23-31104", name: "Tadeo, Angel Marie M." },
  ]);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.studentId.includes(searchText)
  );

  const renderStudentItem = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={styles.numberCell}>{index + 1}</Text>
      <Text style={styles.studentIdCell}>{item.studentId}</Text>
      <Text style={styles.nameCell}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header Title */}
      <Stack.Screen
        options={{
          title: "Student List",
        }}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>ABM K</Text>
        <View style={styles.textContainer}>
          <Text style={styles.txt}>11 - STEM</Text>
          <Text style={styles.txt}>AMS 203</Text>
          <Text style={styles.txt}>AM Class</Text>
        </View>
      </View>

      <View style={styles.filtersContainer}>
        {/* Search bar with icon */}
        <View style={styles.searchWrapper}>
          <View style={styles.dropdownContainer}>
          <TextInput
            style={styles.searchFilter}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
            zIndex={3000}
            zIndexInverse={1000}
          />
          </View>
        </View>

        {/* Gender dropdown */}
        <View style={styles.filterGender}>
          <Text style={styles.genderLabel}>Gender:</Text>
          <View style={styles.dropdownContainer}>
          <DropDownPicker
            open={open}
            value={selectedGender}
            items={genderItems}
            setOpen={setOpen}
            setValue={setSelectedGender}
            setItems={setGenderItems}
            style={styles.genderFilter}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            arrowIconStyle={styles.arrowIcon}
            tickIconStyle={styles.tickIcon}
            placeholder="All"
            zIndex={2000}
            zIndexInverse={2000}
          />
          </View>
        </View>
      </View>

      <View style={styles.headerContainer}>
      <Text style={styles.headerNumber}>No.</Text>
      <Text style={styles.headerStudentId}>StudentID</Text>
      <Text style={styles.headerName}>Name</Text>
    </View>

      <FlatList
        data={filteredStudents}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.studentList}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <Text style={styles.adviserName}>Ms. Lei V. Lucman</Text>
        <Text style={styles.footerText}>ABM K - Adviser</Text>
      </View>

      {/* Close Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
        >
          <Text style={styles.closeButtonText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
    gap: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    fontSize: 14,
  },
  filtersContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
    filterGender: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 8,
  },
  genderLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 8,
  },
  dropdownContainer: {
    flex: 1,
  },
  searchFilter: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    minHeight: 36,
  },
   genderFilter: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    minHeight: 36,
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    backgroundColor: "#fff",
    maxHeight: 150,
  },
  arrowIcon: {
    width: 12,
    height: 12,
  },
  tickIcon: {
    width: 12,
    height: 12,
  },
// Fixed header container - make it align with table rows
headerContainer: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: "white",
  marginHorizontal: 15,
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 2,
  borderBottomColor: "#E02B20",
},

headerNumber: {
  fontSize: 16,
  fontWeight: "bold",
  color: '#333',
  width: 40,
  textAlign: 'center',
},

headerStudentId: {
  fontSize: 16,
  fontWeight: "bold",
  color: '#333',
  width: 100,
  marginHorizontal: 30,
},

headerName: {
  fontSize: 16,
  fontWeight: "bold",
  color: '#333',
  flex: 1,
  marginLeft: 10,
},

  studentList: {
  flex: 1,
  marginHorizontal: 15,
  marginTop: 10,
  backgroundColor: '#fff',
},


tableRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  paddingHorizontal: 15,
  borderBottomWidth: 1,
  borderBottomColor: '#f0f0f0',
  backgroundColor: '#fff',
},

numberCell: {
  fontSize: 14,
  fontWeight: '500',
  color: '#333',
  width: 20,
  textAlign: 'center',
},

studentIdCell: {
  fontSize: 14,
  color: '#666',
  fontFamily: 'monospace',
  width: 100,
  marginLeft: 55,
},

nameCell: {
  fontSize: 14,
  color: '#333',
  flex: 1,
  fontWeight: '400',
},


  footer: {
    alignItems: "right",
    paddingVertical: 15,
    marginRight: 18,
  },
  adviserName: {
    fontSize: 16,
    color: "black",
    textAlign: "right",
    fontWeight: "bold",
    marginRight: 18,
  },
  footerText: {
    fontSize: 14,
    color: "#666",
    textAlign: "right",
    marginRight: 30,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    backgroundColor: "#f44336",
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
