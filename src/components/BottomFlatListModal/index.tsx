import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import React, {
  ComponentType,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  Text,
  View,
  StyleSheet,
  ListRenderItem,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Portal } from "react-native-portalize";

import styles from "./styles";
import { Color } from "../../constants";

export interface IBottomFlatListModalProps {
  modalTitle?: string;
  isVisible: boolean;
  data: any[];
  snapPoints?: (string | number)[];
  contentContainerStyle?: StyleProp<ViewStyle>;
  renderItem: ListRenderItem<any>;
  keyExtractor: (item: any, index: number) => string;
  ItemSeparatorComponent?: ComponentType<any>;
  onClose: () => void;
}

const BottomFlatListModal: FC<IBottomFlatListModalProps> = ({
  modalTitle = "",
  isVisible,
  data,
  snapPoints,
  contentContainerStyle,
  renderItem,
  keyExtractor,
  ItemSeparatorComponent,
  onClose,
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
        <BottomSheetFlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={contentContainerStyle}
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListHeaderComponent={() => {
            return (
              <>
                <Text style={styles.modalTitle}>{modalTitle}</Text>
                <View
                  style={{
                    height: StyleSheet.hairlineWidth,
                    backgroundColor: Color.grey,
                    marginTop: 15,
                  }}
                />
              </>
            );
          }}
        />
      </BottomSheet>
    </Portal>
  );
};

export default BottomFlatListModal;
