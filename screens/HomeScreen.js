import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
} from "react-native";
import Navigation from "../navigation";

const image = { uri: "../assets/images/stock_guitar.jpg" };
function HomeScreen({ navigation }) {
  // render() {
  return (
    <ScrollView style={styles.body}>
      <View style={{ display: "flex" }}>
        <View height={200} backgroundColor="">
          <ImageBackground
            source={require("../assets/images/stock_guitar.jpg")}
            imageStyle={{ opacity: 0.3 }}
            resizeMode="cover"
            style={styles.image}
          >
            <Text style={styles.welcome}>Good Morning</Text>
            <View
              style={{
                top: "50%",
                position: "relative",
                transform: [{ translateY: -50 }],
              }}
            >
              <Text style={styles.heading2}>You have</Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontSize: "40",
                  color: "orange",
                  textAlign: "center",
                }}
              >
                30
              </Text>
              <Text style={styles.heading2}> Band Requests</Text>
            </View>
          </ImageBackground>
        </View>
        <Pressable
          color="blue"
          title="button"
          style={{
            position: "relative",
            top: "50%",
            transform: [{ translateY: 300 }],

            alignSelf: "center",
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 12,
            // paddingHorizontal: 32,
            borderRadius: 30,
            // elevation: 3,
            backgroundColor: "orange",
          }}
          onPress={() => {
            // alert("button pressed");
            navigation.navigate("Find");
          }}
        >
          <Text style={{ color: "black", fontWeight: "700", fontSize: "20" }}>
            Find Bands
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
  // }
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "#121212",
    display: "flex",
  },
  image: {
    height: "200%",
    justifyContent: "center",
  },
  welcome: {
    marginLeft: "2%",
    marginTop: "0%",
    position: "absolute",
    top: "5%",
    fontSize: "30px",
    fontWeight: "500",
    color: "white",
    textAlign: "left",
  },
  heading2: {
    fontSize: "25",
    fontWeight: "400",
    color: "white",
    textAlign: "center",
  },
});
export default HomeScreen;
