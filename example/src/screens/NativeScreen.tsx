import React, { useCallback, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Portal } from '@gorhom/portal';
import { ShowcaseLabel } from '@gorhom/showcase-template';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { FullWindowOverlay } from 'react-native-screens';
import { Button } from '../components/Button';
import { CounterModal } from '../components/CounterModal';

const Stack = createNativeStackNavigator();

const DummyScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const { navigate } = useNavigation();

  const handleModalTogglePress = useCallback(() => {
    setShowModal(state => !state);
  }, []);

  const handleNavigatePress = useCallback(() => {
    navigate({
      // @ts-ignore
      name: 'B',
      key: `screen-a-${Math.random()}`,
    });
  }, [navigate]);

  return (
    <View style={styles.container}>
      <ShowcaseLabel children={count} />
      <Button
        label={`${showModal ? 'Hide' : 'Show'} Modal`}
        onPress={handleModalTogglePress}
      />

      <Button label="Navigate to Native Modal" onPress={handleNavigatePress} />

      {showModal && (
        <Portal name="modal">
          <FullWindowOverlay style={StyleSheet.absoluteFill}>
            <CounterModal
              count={count}
              onIncrease={() => setCount(count + 1)}
              onPress={handleModalTogglePress}
            />
          </FullWindowOverlay>
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
  <Stack.Navigator>
    <Stack.Screen
      name="A"
      component={DummyScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="B"
      component={DummyScreen}
      options={{
        presentation: 'formSheet',
        headerShown: Platform.OS === 'ios',
      }}
    />
  </Stack.Navigator>
);
