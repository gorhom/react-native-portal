import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useAnimationState, View as MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const SPACE = 10;

interface MotiPopoverProps {
  position: 'top' | 'bottom' | string;
  targetLayout: LayoutRectangle;
  onPress: () => void;
}

const MotiPopover = ({ position, targetLayout, onPress }: MotiPopoverProps) => {
  //#region state
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  //#endregion

  //#region variables
  const shouldUnmountPopover = useRef(false);
  const popoverPosition = useMemo(
    () => ({
      top:
        position === 'bottom'
          ? targetLayout.y + targetLayout.height + SPACE
          : targetLayout.y - layout.height - SPACE,
      left: targetLayout.x + targetLayout.width / 2 - layout.width / 2,
    }),
    [position, layout, targetLayout]
  );

  const backdropAnimationState = useAnimationState({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
  });
  const popoverAnimationState = useAnimationState({
    to: {
      opacity: 1,
      translateY: 0,
    },
    from: {
      opacity: 0,
      translateY: position === 'bottom' ? -25 : 25,
    },
  });
  //#endregion

  //#region styles
  const popoverContainerStyle = useMemo(
    () => [styles.popoverContainer, popoverPosition],
    [popoverPosition]
  );
  //#endregion

  //#region callbacks
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
  const handleBackdropPress = useCallback(() => {
    shouldUnmountPopover.current = true;
    backdropAnimationState.transitionTo('from');
    popoverAnimationState.transitionTo('from');
  }, [popoverAnimationState, backdropAnimationState]);
  const handleAnimationCompletion = useCallback(
    (styleProp, didAnimationFinish) => {
      if (
        shouldUnmountPopover.current &&
        didAnimationFinish &&
        styleProp === 'translateY'
      ) {
        onPress();
      }
    },
    [onPress]
  );
  //#endregion
  return (
    <>
      <TouchableWithoutFeedback
        onPress={handleBackdropPress}
        style={styles.buttonContainer}
      >
        <MotiView
          state={backdropAnimationState}
          transition={{
            type: 'timing',
            easing: Easing.out(Easing.quad),
            duration: 125,
          }}
          style={styles.backdropContainer}
        />
      </TouchableWithoutFeedback>
      <MotiView
        onLayout={handlePopoverLayout}
        style={popoverContainerStyle}
        state={popoverAnimationState}
        transition={{
          type: 'timing',
          easing: Easing.out(Easing.quad),
          duration: 250,
        }}
        onDidAnimate={handleAnimationCompletion}
      >
        <Text>Simple Popover</Text>
      </MotiView>
    </>
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

export default MotiPopover;
