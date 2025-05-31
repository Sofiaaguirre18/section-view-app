import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Success Modal Component
const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}  
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.checkmarkContainer}>
            <Text style={styles.checkmark}>✓</Text>
          </View>
          <Text style={styles.successText}>SUBMITTED!</Text>
        </View>
      </View>
    </Modal>
  );
};

// Error Modal Component
const ErrorModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}  
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.errorContainer}>
            <Text style={styles.exclamationMark}>!</Text>
          </View>
          <Text style={styles.errorText}>You already selected Specialization!</Text>
        </View>
      </View>
    </Modal>
  );
};

// Combined Modal Component (handles both types)
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
          onPress={() => {}}
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

const styles = StyleSheet.create({
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

