import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

// import { AppLoading, Asset, Font, Icon } from "expo";
// import React from "react";
// import { StatusBar, StyleSheet, View } from "react-native";
// import AppNavigator from "./navigation/MainTabNavigator";

// export default class App extends React.Component {
//   state = {
//     isLoadingComplete: false,
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return (
//         <AppLoading
//           startAsync={this._loadResourcesAsync}
//           onError={this._handleLoadingError}
//           onFinish={this._handleFinishLoading}
//         />
//       );
//     } else {
//       return (
//         <View style={styles.container}>
//           <StatusBar hidden />
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Asset.loadAsync([
//         require("./assets/images/splash.png"),
//         require("./assets/images/icon.png"),
//       ]),
//       Font.loadAsync({
//         // This is the font we're using for our tab bar
//         ...Icon.MaterialIcons.font,
//         ...Icon.MaterialCommunityIcons.font,
//         ...Icon.FontAwesome.font,
//         ...Icon.Feather.font,
//       }),
//     ]);
//   };

//   _handleLoadingError = (error) => {
//     // In this case, you might want to report the error to your error
//     // reporting service, such as Sentry
//     console.warn(error);
//   };

//   _handleFinishLoading = () => {
//     this.setState({ isLoadingComplete: true });
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
