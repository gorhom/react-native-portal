import React from 'react';
import { Portal, PortalHost } from '@gorhom/portal';
import { StyleSheet, Text, View } from 'react-native';

const BasicScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Text won't be teleported!
          <Portal hostName="custom_host">
            <Text style={styles.text}>
              Text to be teleported to the custom host
            </Text>
          </Portal>
          <Portal>
            <View style={styles.customHostBox}>
              <Text style={styles.text}>
                Text to be teleported to the root host
              </Text>
            </View>
          </Portal>
        </Text>
      </View>
      <PortalHost name="custom_host" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  box: {
    padding: 24,
    backgroundColor: '#333',
  },
  customHostBox: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

export default BasicScreen;
