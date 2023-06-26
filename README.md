# **Sunnova Components**

`sunnova-components` is an expo-supported react native component library for the MySunnova app.

This library includes many components:

- `BottomModal`
- `BottomFlatListModal`
- `Button`
- `FormSection`
- `FormInput`
- `FormMaskedInput`
- `FormMultiLineInput`
- `FormPasswordInput`
- `FormError`
- `FormSwitch`
- `FormDateSelect`
- `FormPicklist`
- `FormMultiPicklist`
- `FormRadioButtons`
- `TabSelector`

# **Installation**

Expo via NPM:

`npx expo install react-native-gesture-handler react-native-mask-text react-native-portalize react-native-reanimated react-hook-form @react-native-community/datetimepicker react-native-modal-datetime-picker react-native-modal`

# **A few additional steps**

Add this import to your App.tsx:

```ts
import { Host } from "react-native-portalize";
```

And wrap your entire app with the components like so:

```ts
export default function App() {
  return <Host>{/* your app code here */}</Host>;
}
```

# **Examples**

There are many examples available here:

https://github.com/sunnova-benjirose/sunnova-components/tree/master/example
