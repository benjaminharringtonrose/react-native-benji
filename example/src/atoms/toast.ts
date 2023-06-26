import { TextStyle, ViewStyle } from "react-native";
import { atom, useRecoilState } from "recoil";

import { Color } from "../constants";

export enum ToastType {
  Success = "success",
  Error = "error",
  Default = "default",
}

interface IToastState {
  isVisible: boolean;
  message: string;
  type: ToastType;
  ms?: number;
}

export const toastState = atom<IToastState>({
  key: "ToastState",
  default: {
    isVisible: false,
    message:
      "It appears you have an error. Please review your information and try again.",
    type: ToastType.Default,
    ms: 2000,
  },
});

export const useToast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  const toggleToast = ({
    type,
    message,
    ms = 2000,
  }: {
    type: ToastType;
    message: string;
    ms?: number;
  }) => {
    setToast((state) => ({
      ...state,
      isVisible: !state.isVisible,
      type,
      message,
      ms,
    }));
  };

  const viewStyle: Record<string, ViewStyle> = {
    [ToastType.Error]: {
      backgroundColor: Color.errorLight,
      borderColor: Color.error,
    },
    [ToastType.Success]: {
      backgroundColor: Color.successLight,
      borderColor: Color.success,
    },
  };

  const textStyle: Record<string, TextStyle> = {
    [ToastType.Error]: {
      color: Color.error,
    },
    [ToastType.Success]: {
      color: Color.success,
    },
  };

  return {
    isVisible: toast.isVisible,
    message: toast.message,
    type: toast.type,
    ms: toast.ms,
    toggleToast,
    viewStyle: viewStyle[toast.type],
    textStyle: textStyle[toast.type],
  };
};
