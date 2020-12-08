import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Portal, PortalHost } from '@gorhom/portal';
import CustomComponent from './CustomComponent';

const App = () => {
  const [mount, setMount] = useState(false);
  const [count, setCount] = useState(0);
  const customRef = useRef();

  const handleIncrementPress = useCallback(() => {
    setCount(state => state + 1);
  }, []);
  const handleMountPress = useCallback(() => {
    setMount(state => !state);
  }, []);
  const handleRefPress = useCallback(() => {
    if (customRef.current) {
      customRef.current.test();
    }
  }, []);
  return (
    <View style={styles.container}>
      <PortalHost>
        <Text>Header</Text>

        {mount && (
          <Portal>
            <CustomComponent ref={customRef} value={count} />
          </Portal>
        )}

        <Text>Footer</Text>
      </PortalHost>

      <Button onPress={handleIncrementPress} title={'Increment'} />
      <Button onPress={handleMountPress} title={mount ? 'Unmount' : 'Mount'} />
      <Button onPress={handleRefPress} title={'Call ref'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

export default App;
