import { FC, useEffect } from "react";
import Orientation, { OrientationType } from "react-native-orientation-locker";
import { useSetRecoilState } from "recoil";

import { settingsState } from "../atoms/settings";

export const OrientationListener: FC = () => {
  const setState = useSetRecoilState(settingsState);

  const handleOrientationChange = (orientation: OrientationType) => {
    setState((state) => ({
      ...state,
      orientation,
    }));
  };

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientationChange);
    return () => Orientation.removeOrientationListener(handleOrientationChange);
  }, []);

  return null;
};
