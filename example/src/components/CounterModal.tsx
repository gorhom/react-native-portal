import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface SimpleModalProps {
  count: number;
  onIncrease: () => void;
  onPress: (event: GestureResponderEvent) => void;
}

export const CounterModal = ({
  count,
  onIncrease,
  onPress,
}: SimpleModalProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.backdropContainer}>
        <View style={styles.modalContainer}>
          <Text>Counter Modal</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 12,
            }}
          >
            <Text>{count}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={onIncrease}
              >
                <Text>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={onIncrease}
              >
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  actionButton: {
    width: 25,
    height: 25,
    borderRadius: 25,
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
