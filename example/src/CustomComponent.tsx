import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const CustomComponent = forwardRef(({ value }, ref) => {
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    test: () => console.log('YOOO'),
  }));

  const handleOnPress = useCallback(() => {
    setCount(state => state + 1);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={handleOnPress}>
        <Text style={styles.text}>{`CustomComponent: ${value}.${count}`}</Text>
      </TouchableHighlight>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'red',
  },
  text: {
    color: 'white',
  },
});

export default CustomComponent;
