import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { FC, useCallback, useEffect, useMemo, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Portal } from "react-native-portalize";

import styles from "./styles";
import { Color } from "../../constants";

export interface IBottomModalProps {
  modalTitle?: string;
  isVisible: boolean;
  children: JSX.Element | JSX.Element[] | null;
  snapPoints?: (string | number)[];
  onClose: () => void;
}

const BottomModal: FC<IBottomModalProps> = ({
  modalTitle = "",
  isVisible,
  snapPoints,
  onClose,
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const defaultSnapPoints = useMemo(() => ["25%", "50%"], []);

  const snapPointsToUse = snapPoints || defaultSnapPoints;

  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.expand();
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isVisible]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <Portal>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPointsToUse}
        enablePanDownToClose
        index={-1}
        backgroundStyle={styles.bottomSheet}
        onClose={onClose}
        backdropComponent={renderBackdrop}
      >
        <BottomSheetView style={{ flex: 1 }}>
          <Text style={styles.modalTitle}>{modalTitle}</Text>
          <View
            style={{
              height: StyleSheet.hairlineWidth,
              backgroundColor: Color.grey,
              marginTop: 15,
            }}
          />
          {children}
        </BottomSheetView>
      </BottomSheet>
    </Portal>
  );
};

export default BottomModal;
