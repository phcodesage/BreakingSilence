import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SettingsContainer = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    frameShadowBox: {
      height: height * 0.075,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_200,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      justifyContent: 'center',
      alignItems: 'center',
    },
    frameItemPosition: {
      top: height * 0.505,
      left: "50%",
      position: "absolute",
    },
    back1Typo: {
      fontSize: width * 0.07,
      textAlign: "center",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    backPosition: {
      top: height * 0.87,
      left: "50%",
      position: "absolute",
    },
    frameChild: {
      left: "50%",
      top: height * 0.385,
      position: "absolute",
      marginLeft: width * -0.257,
      width: width * 0.514,
    },
    frameItem: {
      height: height * 0.075,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_200,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      marginLeft: width * -0.257,
      width: width * 0.514,
      justifyContent: 'center',
      alignItems: 'center',
    },
    settings: {
      top: 0,
      fontSize: width * 0.1,
      textAlign: "center",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
      marginLeft: width * -0.165,
      left: "50%",
      position: "absolute",
    },
    contactUs1: {
      width: '100%',
    },
    aboutUs1: {
      width: '100%',
    },
    aboutUsPosition: {
      left: "50%",
      top: height * 0.385,
      position: "absolute",
    },
    frameInner: {
      marginLeft: width * -0.126,
      width: width * 0.253,
      height: height * 0.075,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_200,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      justifyContent: 'center',
      alignItems: 'center',
    },
    back1: {
      width: '100%',
    },
    frame: {
      top: height * -0.005,
      left: width * 0.244,
      height: height * 0.949,
      overflow: "hidden",
      width: width * 0.514,
      position: "absolute",
    },
  });

  return (
    <View style={styles.frame}>
      <View style={[styles.frameChild, styles.frameShadowBox]} />
      <View style={[styles.frameItem, styles.frameItemPosition]} />
      <Text style={styles.settings}>SETTINGS</Text>
      <Pressable
        style={[styles.frameItem, styles.frameItemPosition]}
        onPress={() => navigation.navigate("CONTACTUS")}
      >
        <Text style={[styles.contactUs1, styles.back1Typo]}>Contact Us</Text>
      </Pressable>
      <Pressable
        style={[styles.frameChild, styles.frameShadowBox, styles.aboutUsPosition]}
        onPress={() => navigation.navigate("ABOUTUS")}
      >
        <Text style={[styles.aboutUs1, styles.back1Typo]}>About Us</Text>
      </Pressable>
      <Pressable
        style={[styles.frameInner, styles.backPosition]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back1, styles.back1Typo]}>BACK</Text>
      </Pressable>
    </View>
  );
};

export default SettingsContainer;