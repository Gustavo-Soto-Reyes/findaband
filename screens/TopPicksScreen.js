import React from "react";
import { Text, View, StyleSheet, Animated, Dimensions, Image } from "react-native";
// import { Constants } from 'expo';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

import SwipeUpDown from 'react-native-swipe-up-down';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});


class TopPicksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 60 }} />
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10
              }
            ]}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={{uri:"https://i.pinimg.com/originals/95/8f/4b/958f4b1ddcf3814de7a14adb752c547b.jpg"}}
            />
          </Animated.View>
        </View>
        <View style={{ height: 60 }} />
      </View>
    );
  }
}

export default TopPicksScreen;
