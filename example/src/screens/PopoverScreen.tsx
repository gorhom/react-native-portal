import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Portal, PortalHost } from '@gorhom/portal';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimplePopover from '../components/SimplePopover';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const BasicScreen = () => {
  // state
  const [showModal, setShowModal] = useState(false);
  const [config, setConfig] = useState({
    position: '',
    targetLayout: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
  });

  // refs
  const topButtonRef = useRef<TouchableOpacity>(null);
  const bottomButtonRef = useRef<TouchableOpacity>(null);

  // callbacks
  const handleMountTopPopoverPress = useCallback(() => {
    topButtonRef.current?.measure((x, y, width, height) => {
      setConfig({
        position: 'top',
        targetLayout: {
          x,
          y,
          width,
          height,
        },
      });
      setShowModal(state => !state);
    });
  }, []);

  const handleMountBottomPopoverPress = useCallback(() => {
    bottomButtonRef.current?.measure((x, y, width, height) => {
      setConfig({
        position: 'bottom',
        targetLayout: {
          x,
          y,
          width,
          height,
        },
      });
      setShowModal(state => !state);
    });
  }, []);

  const handleDismissPopoverPress = useCallback(() => {
    setShowModal(false);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={topButtonRef}
        style={styles.button}
        onPress={handleMountTopPopoverPress}
      >
        <Text style={styles.text}>Top Popover</Text>
      </TouchableOpacity>
      <TouchableOpacity
        ref={bottomButtonRef}
        style={styles.button}
        onPress={handleMountBottomPopoverPress}
      >
        <Text style={styles.text}>Bottom Popover</Text>
      </TouchableOpacity>
      {showModal && (
        <Portal name="modal">
          <SimplePopover {...config} onPress={handleDismissPopoverPress} />
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
    marginVertical: 6,
    borderRadius: 24,
    backgroundColor: '#333',
  },
  text: {
    color: 'white',
  },
});

export default () => (
  <PortalHost>
    <Tab.Navigator sceneContainerStyle={{ height: WINDOW_HEIGHT }}>
      <Tab.Screen name="Home" component={BasicScreen} />
      <Tab.Screen name="Settings" component={BasicScreen} />
    </Tab.Navigator>
  </PortalHost>
);
