import { registerRootComponent } from "expo";
import { LogBox } from "react-native";

import App from "./App";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native, along with all other PropTypes.",
  "Constants.platform.ios.model has been deprecated in favor of expo-device's Device.modelName property.",
]);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
