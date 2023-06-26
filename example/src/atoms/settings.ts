import { OrientationType } from "react-native-orientation-locker";
import { atom } from "recoil";

interface ISettingsState {
  orientation: OrientationType;
}

export const settingsState = atom<ISettingsState>({
  key: "SettingsState",
  default: {
    orientation: OrientationType.PORTRAIT,
  },
});
