import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface SimpleNativeModalProps {
  onPress: (event: GestureResponderEvent) => void;
}

const SimpleNativeModal = ({ onPress }: SimpleNativeModalProps) => {
  const { name } = useRoute();
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.backdropContainer}>
        <View style={styles.modalContainer}>
          <Text>Current Screen: {name}</Text>
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

export default SimpleNativeModal;
