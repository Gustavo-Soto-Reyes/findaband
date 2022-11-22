import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const image = { uri: "../assets/images/stock_guitar.jpg" };
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          source={require("../assets/images/stock_guitar.jpg")}
          imageStyle={{ opacity: 0.3 }}
          resizeMode="cover"
          style={styles.image}
        >
          <Text style={styles.welcome}>Welcome</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#121212",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "red",
  },
  welcome: {
    mt: "10%",
    flex: 1,
    fontSize: "40px",
    color: "white",
    textAlign: "center",
  },
});
export default HomeScreen;
