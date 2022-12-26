import React from "react";
import { Text, View, StyleSheet, Animated, Dimensions, Image, PanResponder } from "react-native";
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

const Foods = [
  { id: "2", uri: "https://therake.imgix.net/wp-content/uploads/2018/11/beatles-feature-edit.jpg?ixlib=js-3.6.0&w=996&h=711&fit=crop&auto=format&s=721936bd6d3fd05a9493827dea94f786" },
  { id: "4", uri: "https://akns-images.eonline.com/eol_images/Entire_Site/2012911/300.Rihanna.jc.101012.jpeg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top" },
  { id: "3", uri: "https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png" },
  { id: "1", uri: "https://i.pinimg.com/originals/95/8f/4b/958f4b1ddcf3814de7a14adb752c547b.jpg" },
  { id: "5", uri: "https://pyxis.nymag.com/v1/imgs/848/851/4305fb42b7d9f5533ac9b8cb054c42f500-ariana-grande-album-review.rsquare.w700.jpg" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZNetLpqzZ2v_u0t3ul6t5czo91Ae8zZ5Og&usqp=CAU" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToONzuPZahfzQXrss9j4IsTgDn1THHuWkl_g&usqp=CAU" },
  { id: "0", uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F236x%2F27%2Fd6%2F69%2F27d6691286f2ce2f183db67664ac0f64--music-icon-rap-music.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fbermudalennon%2Fjohn-lennon-album-covers%2F&tbnid=vlb29jow9YqGGM&vet=12ahUKEwjJ_r3xyJb8AhXF61MKHVHeCZgQMygNegUIARDmAQ..i&docid=MgTy3XngAwm7MM&w=224&h=224&q=john%20lennon%20album%20cover&client=safari&ved=2ahUKEwjJ_r3xyJb8AhXF61MKHVHeCZgQMygNegUIARDmAQ" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfHRnZSlxqNQQDy0jz2njOmti2LAGcu-CcIA&usqp=CAU" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GWNwrCGcL0_H1s5bCDZ5Q2H3wKvNRxRVmQ&usqp=CAU" },
  { id: "0", uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage-cdn.hypb.st%2Fhttps%253A%252F%252Fhypebeast.com%252Fwp-content%252Fblogs.dir%252F6%252Ffiles%252F2020%252F04%252Flady-gaga-chromatica-album-art-cover-release-teaser-0.jpg%3Fw%3D960%26cbr%3D1%26q%3D90%26fit%3Dmax&imgrefurl=https%3A%2F%2Fhypebae.com%2F2020%2F4%2Flady-gaga-chromatica-album-cover-art-release-teaser&tbnid=GoKos2PAr-9_HM&vet=12ahUKEwjwve_NyZb8AhWQw1MKHWVhCqcQMygjegUIARD-AQ..i&docid=IBcxC2a_SyY9hM&w=960&h=640&q=lady.%20gaga%20album%20cover&client=safari&ved=2ahUKEwjwve_NyZb8AhWQw1MKHWVhCqcQMygjegUIARD-AQ" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XMVJWvTFLmyreLG3zIYZUq9o3rS1OvUnzw&usqp=CAU" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5JV-6yYrSy0POFEV-WyMR5giLvTsZq7T4EQ&usqp=CAU" },
  { id: "0", uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xJG2KKsKVOeUSpsDN9Z-gm4chotzYReJiQ&usqp=CAU" },
]

class TopPicksScreen extends React.Component {

  UNSAFE_componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
            useNativeDriver: true,

          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
            useNativeDriver: true
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        }
        else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
            friction: 4
          }).start()
        }
      }
    })
  }

  constructor() {
    super();
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex: 0
    }

    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp'
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.position.getTranslateTransform()
      ]
    }

    this.likeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })

    this.nopeOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })

    this.nextCardOpacity = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp'
    })
    this.nextCardScale = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

  }


  render() {
    return Foods.map((item, i) => {

      if (i < this.state.currentIndex) {
        return null;
      } else if (i == this.state.currentIndex) {


        return (
          <Animated.View
            {...this.PanResponder.panHandlers}
            key={i}
            style={[
              this.rotateAndTranslate,
              {
                height: SCREEN_HEIGHT - 120,
                width: SCREEN_WIDTH,
                padding: 10,
                position: 'absolute'
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: this.likeOpacity,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "green",
                  color: "green",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10
                }}
              >
                LIKE
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: this.nopeOpacity,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000
              }}
            >
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "red",
                  color: "red",
                  fontSize: 32,
                  fontWeight: "800",
                  padding: 10
                }}
              >
                NOPE
              </Text>
            </Animated.View>

            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={{ uri: item.uri }}
            />
          </Animated.View>




        );
      } else {
        return (
          <Animated.View
            key={i}
            style={{
              opacity: this.nextCardOpacity,
              transform: [{ scale: this.nextCardScale }],
              height: SCREEN_HEIGHT - 120,
              width: SCREEN_WIDTH,
              padding: 10,
              position: 'absolute'
            }}
          >
            <Image
              style={{
                flex: 1,
                height: null,
                width: null,
                resizeMode: "cover",
                borderRadius: 20
              }}
              source={{ uri: item.uri }}
            />
          </Animated.View>
        );
      }
    }).reverse();

  }
}

export default TopPicksScreen;
