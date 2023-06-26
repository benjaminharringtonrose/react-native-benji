import { useState } from "react";

import { IWizardItem } from "../types";

export const useWizardSteps = ({
  data,
  onCompletion,
}: {
  data: IWizardItem[];
  onCompletion?: () => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const isFirstIndex = selectedIndex === 0;
  const isLastIndex = selectedIndex === data.length - 1;
  const titles = data.map((item) => item.title);

  const onNextPress = () => {
    if (selectedIndex < data.length - 1) {
      setSelectedIndex((index) => index + 1);
    } else {
      onCompletion?.();
      setSelectedIndex(0);
    }
  };

  const onBackPress = () => {
    setSelectedIndex((index) => index - 1);
  };

  return {
    isFirstIndex,
    isLastIndex,
    selectedIndex,
    titles,
    numberOfSteps: data.length,
    setSelectedIndex,
    onNextPress,
    onBackPress,
  };
};
