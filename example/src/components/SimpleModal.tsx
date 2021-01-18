import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

interface SimpleModalProps {
  onPress: () => void;
}

const SimpleModal = ({ onPress }: SimpleModalProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.backdropContainer}>
        <View style={styles.modalContainer}>
          <Text>Simple Modal</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 24,
    backgroundColor: 'white',
  },
});

export default SimpleModal;
