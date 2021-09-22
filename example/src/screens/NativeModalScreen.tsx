import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Portal } from '@gorhom/portal';
import SimpleNativeModal from '../components/SimpleNativeModal';

const NativeModalScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnModalPress = useCallback(() => {
    setShowModal(state => !state);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOnModalPress}>
        <Text style={styles.text}>
          {showModal ? 'Hide' : 'Show'} Native Modal
        </Text>
      </TouchableOpacity>
      {showModal && (
        <Portal name="modal" contained={false}>
          <SimpleNativeModal onPress={handleOnModalPress} />
        </Portal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    backgroundColor: '#333',
  },
  text: {
    color: 'white',
  },
});

export default NativeModalScreen;
