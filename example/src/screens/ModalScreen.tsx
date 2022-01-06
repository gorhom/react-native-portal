import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Portal } from '@gorhom/portal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleModal from '../components/SimpleModal';

const Tab = createBottomTabNavigator();

const BasicScreen = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnModalPress = useCallback(() => {
    setShowModal(state => !state);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleOnModalPress}>
        <Text style={styles.text}>{showModal ? 'Hide' : 'Show'} Modal</Text>
      </TouchableOpacity>
      {showModal && (
        <Portal name="modal">
          <SimpleModal onPress={handleOnModalPress} />
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

export default () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={BasicScreen} />
    <Tab.Screen name="Settings" component={BasicScreen} />
  </Tab.Navigator>
);
