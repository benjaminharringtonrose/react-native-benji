import React, { FC, useEffect } from "react";
import Reanimated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import styles from "./styles";
import { useToast } from "../../atoms/toast";

const Toast: FC = () => {
  const { isVisible, message, type, ms, toggleToast, viewStyle, textStyle } =
    useToast();
  const translateY = useSharedValue(-70);

  const shouldToggleToast = () => {
    toggleToast({
      message,
      type,
      ms,
    });
  };

  useEffect(() => {
    if (isVisible) {
      translateY.value = withSequence(
        withTiming(100),
        withDelay(
          ms ?? 2000,
          withTiming(-70, {}, (finished) => {
            if (finished) {
              runOnJS(shouldToggleToast)();
            }
          })
        )
      );
    } else if (translateY.value !== -70) {
      translateY.value = withTiming(-70);
    }
  }, [isVisible]);

  const animStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <Reanimated.View style={[styles.root, viewStyle, animStyle]}>
      <Reanimated.Text style={[styles.errorText, textStyle]}>
        {message}
      </Reanimated.Text>
    </Reanimated.View>
  );
};

export default Toast;
