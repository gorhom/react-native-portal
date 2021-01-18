import React from 'react';
import { Portal, PortalHost } from '@gorhom/portal';
import { StyleSheet, Text, View } from 'react-native';

const BasicScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Text won't be teleported!
          <Portal>
            <Text style={styles.text}>Text to be teleported</Text>
          </Portal>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {
    padding: 24,
    backgroundColor: '#333',
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    margin: 24,
    backgroundColor: '#eee',
  },
});

export default () => (
  <PortalHost>
    <BasicScreen />
  </PortalHost>
);
