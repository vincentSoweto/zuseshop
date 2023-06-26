import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Modal} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function CustomModal({visible, message, onClick}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClick}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <MaterialIcon name="error" size={60} color="#FF0000" />
          <Text style={styles.errorMessage}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.buttonText}>Okay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomModal;
