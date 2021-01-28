import React, { useCallback, useMemo, useState } from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const SPACE = 10;

interface SimplePopoverProps {
  position: 'top' | 'bottom' | string;
  targetLayout: LayoutRectangle;
  onPress: (event: GestureResponderEvent) => void;
}

const SimplePopover = ({
  position,
  targetLayout,
  onPress,
}: SimplePopoverProps) => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const popoverPosition = useMemo(
    () => ({
      opacity: layout.height === 0 || layout.width === 0 ? 0 : 1,
      top:
        position === 'bottom'
          ? targetLayout.y + targetLayout.height + SPACE
          : targetLayout.y - layout.height - SPACE,
      left: targetLayout.x + targetLayout.width / 2 - layout.width / 2,
    }),
    [position, layout, targetLayout]
  );

  const popoverContainerStyle = useMemo(
    () => [styles.popoverContainer, popoverPosition],
    [popoverPosition]
  );

  // callbacks
  const handlePopoverLayout = useCallback(
    ({
      nativeEvent: {
        layout: { height, width },
      },
    }: LayoutChangeEvent) => {
      setLayout(state => {
        if (state.height === height && state.width === width) {
          return state;
        }

        return {
          height,
          width,
        };
      });
    },
    []
  );

  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.buttonContainer}>
      <View style={styles.backdropContainer}>
        <View onLayout={handlePopoverLayout} style={popoverContainerStyle}>
          <Text>Simple Popover</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backdropContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  popoverContainer: {
    position: 'absolute',
    alignSelf: 'center',
    padding: 24,
    backgroundColor: 'white',
  },
});

export default SimplePopover;
