import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Modal,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Stack, useRouter } from "expo-router";

// PopUp Modal Component
const PopUpModal = ({ visible, onClose, type = 'success', message }) => {
  const isSuccess = type === 'success';
  
  return (
    <Modal
      visible={visible}  
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity 
          style={styles.modalContent}
          activeOpacity={1}
          onPress={() => {}} // Prevent modal from closing when touching content
        >
          <View style={isSuccess ? styles.checkmarkContainer : styles.errorContainer}>
            <Text style={isSuccess ? styles.checkmark : styles.exclamationMark}>
              {isSuccess ? '✓' : '!'}
            </Text>
          </View>
          <Text style={isSuccess ? styles.successText : styles.errorText}>
            {message || (isSuccess ? 'SUBMITTED!' : 'You already selected Specialization!')}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

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

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('success');
  const [modalMessage, setModalMessage] = useState('');

  // Mock data for checking if student already has specialization
  const studentsWithSpecialization = ['22-12345', '22-54321', '23-11111'];

  function handleStudentInput() {
    // Validate inputs
    if (!enteredStudentID.trim()) {
      showErrorModal('Please enter Student ID');
      return;
    }

    if (!selectedSpecialization) {
      showErrorModal('Please select a specialization');
      return;
    }

    // Check if student already has specialization
    if (studentsWithSpecialization.includes(enteredStudentID)) {
      showErrorModal('You already selected Specialization!');
      return;
    }

    // If validation passes, show success modal
    showSuccessModal('SUBMITTED!');
    
    // Here you would typically call your API to submit the data
    // studentInput(enteredStudentID, selectedSpecialization);
  }

  function showSuccessModal(message = 'SUBMITTED!') {
    setModalType('success');
    setModalMessage(message);
    setShowModal(true);
    
    // Auto-close success modal after 2 seconds and reset form
    setTimeout(() => {
      setShowModal(false);
      resetForm();
    }, 2000);
  }

  function showErrorModal(message) {
    setModalType('error');
    setModalMessage(message);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function resetForm() {
    setStudentID("");
    setselectedSpecialization("");
  }

  function cancelHandler() {
    resetForm();
    router.push("/");
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
            onPress={cancelHandler}
          >
            <Text style={styles.cancelButtonText}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* PopUp Modal */}
      <PopUpModal
        visible={showModal}
        onClose={closeModal}
        type={modalType}
        message={modalMessage}
      />
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
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 250,
  },
  checkmarkContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  errorContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkmark: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  exclamationMark: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
});