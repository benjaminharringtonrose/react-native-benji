import Icon from "@expo/vector-icons/AntDesign";
import React, { FC, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";
import { Color } from "../../constants";
import Button from "../Button";
import WizardSteps, { useWizardSteps } from "../WizardSteps";
import { IWizardItem } from "../types";

export interface IWizardProps {
  data: IWizardItem[];
  onCompletion: () => void;
  activeColor?: string;
  inactiveColor?: string;
}

const Wizard: FC<IWizardProps> = ({
  data,
  onCompletion,
  activeColor = Color.primary,
  inactiveColor = Color.lightGrey,
}) => {
  const {
    selectedIndex,
    isFirstIndex,
    isLastIndex,
    titles,
    numberOfSteps,
    setSelectedIndex,
    onNextPress,
    onBackPress,
  } = useWizardSteps({ data, onCompletion });

  const { width } = useWindowDimensions();
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  return (
    <View style={styles.root}>
      <WizardSteps
        titles={titles}
        selectedIndex={selectedIndex}
        numberOfSteps={numberOfSteps}
        onStepPress={setSelectedIndex}
        width={width}
        activeColor={activeColor}
        inactiveColor={inactiveColor}
      />
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={2} style={styles.descriptionText}>
          {data[selectedIndex].description}
        </Text>
        <TouchableOpacity onPress={() => setIsHelpVisible(true)}>
          <Icon name="infocirlceo" size={20} color={activeColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.componentContainer}>
        {data[selectedIndex].component}
      </View>
      <View style={styles.buttonContainer}>
        {!isFirstIndex && (
          <Button
            label="BACK"
            onPress={onBackPress}
            labelColor={Color.white}
            backgroundColor={activeColor}
            style={styles.backButton}
          />
        )}
        <Button
          label={isLastIndex ? "DONE" : "NEXT"}
          onPress={onNextPress}
          labelColor={Color.white}
          backgroundColor={activeColor}
          style={styles.nextButton}
        />
      </View>
      <Modal
        isVisible={isHelpVisible}
        onBackdropPress={() => setIsHelpVisible(false)}
      >
        <View style={styles.modalContent}>
          <Icon name="infocirlceo" size={20} color={Color.grey} />
          {!!data[selectedIndex].help && (
            <Text style={styles.helpText}>{data[selectedIndex].help}</Text>
          )}
        </View>
      </Modal>
    </View>
  );
};

export default Wizard;
