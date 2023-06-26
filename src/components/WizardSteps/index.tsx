import Icon from "@expo/vector-icons/AntDesign";
import React, { FC } from "react";
import { View, Pressable, Text, ActivityIndicator } from "react-native";
import Reanimated, {
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import styles from "./styles";
import { Color } from "../../constants";

export { useWizardSteps } from "./useWizardSteps";

interface IWizardStepsProps {
  titles?: (string | undefined)[];
  selectedIndex: number;
  numberOfSteps: number;
  onStepPress: (_index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  showNumbers?: boolean;
  processCompleted?: boolean;
  showLoading?: boolean;
  width: number;
  marginHorizontal?: number;
}

const WizardSteps: FC<IWizardStepsProps> = ({
  titles = [],
  selectedIndex,
  numberOfSteps,
  onStepPress,
  activeColor = Color.primary,
  inactiveColor = Color.lightGrey,
  showNumbers = true,
  processCompleted = false,
  showLoading = false,
  width,
  marginHorizontal = 20,
}) => {
  const widthWithMargins = width - marginHorizontal * 2;
  const constantValue = 2;
  const animWidth = widthWithMargins / (numberOfSteps - 1) - constantValue;

  const animatedLineStyle = useAnimatedStyle(
    () => ({
      width: withTiming(animWidth * selectedIndex + 1, { duration: 600 }),
    }),
    [selectedIndex]
  );

  const pulseStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: withDelay(300, withSequence(withTiming(1.2), withTiming(1))),
        },
      ],
    }),
    [selectedIndex]
  );

  const checkStyle = useAnimatedStyle(
    () => ({
      transform: [{ scale: withSequence(withTiming(1.5), withTiming(1)) }],
    }),
    [selectedIndex]
  );

  const renderSteps = () => {
    const steps: JSX.Element[] = [];
    for (let i = 0; i < numberOfSteps; i++) {
      let backgroundColor = Color.white;

      const isSelected = selectedIndex === i;
      const isStepCompleted = i < selectedIndex;

      if (isStepCompleted || processCompleted) {
        backgroundColor = activeColor;
      } else if (isSelected) {
        backgroundColor = Color.white;
      }

      const borderColor =
        isSelected || isStepCompleted ? activeColor : inactiveColor;
      const circleTextColor = isSelected ? activeColor : Color.grey;
      const titleTextColor = isSelected ? activeColor : Color.grey;

      const renderInnerStepComponent = () => {
        const textColor =
          showNumbers && !processCompleted
            ? circleTextColor
            : Color.transparent;

        if (isStepCompleted || processCompleted) {
          return (
            <Reanimated.View style={i === selectedIndex - 1 && checkStyle}>
              <Icon name="check" size={20} color={Color.white} />
            </Reanimated.View>
          );
        }
        if (showLoading && isSelected) {
          return <ActivityIndicator color={activeColor} />;
        }
        return (
          <Text style={[styles.circleText, { color: textColor }]}>{i + 1}</Text>
        );
      };

      steps.push(
        <Pressable
          key={i}
          style={styles.pressable}
          onPress={() => onStepPress(i)}
        >
          <View style={styles.innerPressableContainer}>
            <Reanimated.View
              style={[
                styles.circle,
                { backgroundColor, borderColor },
                isSelected && pulseStyle,
              ]}
            >
              {renderInnerStepComponent()}
            </Reanimated.View>
          </View>
          {!!titles[i] && (
            <View style={styles.spaceBetween}>
              <Text
                numberOfLines={2}
                style={[styles.titleText, { color: titleTextColor }]}
              >
                {titles[i]}
              </Text>
            </View>
          )}
        </Pressable>
      );
    }

    return steps;
  };

  return (
    <View style={styles.row}>
      {renderSteps()}
      <View style={[styles.animatedLineContainer, { width: widthWithMargins }]}>
        <Reanimated.View
          style={[
            styles.animatedLine,
            { backgroundColor: activeColor },
            animatedLineStyle,
          ]}
        />
        <View style={[styles.staticLine, { backgroundColor: inactiveColor }]} />
      </View>
    </View>
  );
};

export default WizardSteps;
