import * as React from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation/native";

import LibraryScreen from "./screens/LibraryScreen";
import EntranceScreen from './screens/EntranceScreen';

const AppSwitchNavigator = createSwitchNavigator({
    EntranceScreen : EntranceScreen,
    LibraryScreen : LibraryScreen,
},
{
  initialRouteName:"EntranceScreen"
}
);
export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppContainer = createAppContainer(AppSwitchNavigator);