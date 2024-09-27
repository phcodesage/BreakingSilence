import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const SettingsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frame}>
      <View style={[styles.frameChild, styles.frameShadowBox]} />
      <View style={[styles.frameItem, styles.frameItemPosition]} />
      <Text style={styles.settings}>SETTINGS</Text>
      <Pressable
        style={styles.frameItemPosition}
        onPress={() => navigation.navigate("CONTACTUS")}
      >
        <Text style={[styles.contactUs1, styles.back1Typo]}>Contact Us</Text>
      </Pressable>
      <Pressable
        style={styles.aboutUsPosition}
        onPress={() => navigation.navigate("ABOUTUS")}
      >
        <Text style={[styles.aboutUs1, styles.back1Typo]}>About Us</Text>
      </Pressable>
      <View style={[styles.frameInner, styles.backPosition]} />
      <Pressable
        style={styles.backPosition}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back1, styles.back1Typo]}>BACK</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameShadowBox: {
    height: 48,
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
  },
  frameItemPosition: {
    top: 323,
    left: "50%",
    position: "absolute",
  },
  back1Typo: {
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  backPosition: {
    top: 556,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    left: "50%",
    top: 246,
    position: "absolute",
    marginLeft: -92.5,
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
    width: 185,
  },
  frameItem: {
    height: 48,
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
    marginLeft: -92.5,
    width: 185,
  },
  settings: {
    top: 0,
    fontSize: FontSize.size_18xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
    marginLeft: -59.5,
    left: "50%",
    position: "absolute",
  },
  contactUs1: {
    marginLeft: -59.5,
    fontSize: FontSize.size_9xl,
  },
  aboutUs1: {
    marginLeft: -47.5,
  },
  aboutUsPosition: {
    left: "50%",
    top: 246,
    position: "absolute",
  },
  frameInner: {
    marginLeft: -45.5,
    width: 91,
    height: 48,
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
  },
  back1: {
    marginLeft: -25.5,
  },
  frame: {
    top: -3,
    left: 88,
    height: 607,
    overflow: "hidden",
    width: 185,
    position: "absolute",
  },
});

export default SettingsContainer;
