/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import Modal from "react-native-modal";

import styles from "./styles";
import { Color } from "../../constants";
import { usePrevious } from "../../hooks";
import Button from "../Button";
import WizardSteps from "../WizardSteps";
import { IWizardItem } from "../types";

export interface IAsyncStepModalProps {
  isVisible: boolean;
  loading: boolean[];
  data: IWizardItem[];
  ProcessCompletedComponent: JSX.Element;
  onClose: () => void;
}

const AsyncStepModal: FC<IAsyncStepModalProps> = ({
  isVisible = false,
  loading = [],
  data,
  ProcessCompletedComponent,
  onClose,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [processCompleted, setProcessCompleted] = useState(false);
  const { width } = useWindowDimensions();

  const onNext = () => {
    if (selectedIndex < data.length - 1) {
      setSelectedIndex((index) => index + 1);
    } else {
      setProcessCompleted(true);
    }
  };

  const onModalHide = () => {
    setProcessCompleted(false);
    setSelectedIndex(0);
  };

  const Component = () => {
    if (processCompleted) {
      return (
        <View style={styles.processCompletedContainer}>
          <Text style={styles.processCompletedText}>Done!</Text>
        </View>
      );
    }
    return data[selectedIndex].component;
  };

  const Lottie = () => {
    if (data[selectedIndex].lottie) {
      if (!processCompleted) {
        return (
          <View style={{ alignItems: "center" }}>
            {data[selectedIndex].lottie}
          </View>
        );
      }
      return (
        <View style={{ alignItems: "center" }}>
          {ProcessCompletedComponent}
        </View>
      );
    }
    return null;
  };

  const prevLoading = usePrevious<boolean[]>(loading);
  useEffect(() => {
    for (let i = 0; i < loading.length; i++) {
      if (prevLoading?.[i] && !loading[i]) {
        onNext();
      }
    }
  }, [prevLoading, loading]);

  return (
    <Modal isVisible={isVisible} onModalHide={onModalHide}>
      <View style={styles.modalView}>
        <Lottie />
        <WizardSteps
          selectedIndex={selectedIndex}
          numberOfSteps={data.length}
          onStepPress={setSelectedIndex}
          width={width - 20}
          marginHorizontal={40}
          activeColor={Color.primary}
          inactiveColor={Color.lightGrey}
          processCompleted={processCompleted}
          showNumbers={false}
          showLoading
        />
        <Text style={styles.titleText}>
          {processCompleted ? "Process Completed" : data[selectedIndex].title}
        </Text>
        <Component />
        {processCompleted && (
          <Button
            label="OK"
            onPress={onClose}
            backgroundColor={Color.primary}
            labelColor={Color.white}
            style={styles.topMargin}
          />
        )}
      </View>
    </Modal>
  );
};

export default AsyncStepModal;
