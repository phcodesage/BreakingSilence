import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HOME2 = ({
  androidSmall2Position,
  androidSmall2Width,
  androidSmall2Height,
  androidSmall2Top,
  androidSmall2Right,
  androidSmall2Bottom,
  androidSmall2Left,
}) => {
  const androidSmall2Style = useMemo(() => {
    return {
      ...getStyleValue("position", androidSmall2Position),
      ...getStyleValue("width", androidSmall2Width),
      ...getStyleValue("height", androidSmall2Height),
      ...getStyleValue("top", androidSmall2Top),
      ...getStyleValue("right", androidSmall2Right),
      ...getStyleValue("bottom", androidSmall2Bottom),
      ...getStyleValue("left", androidSmall2Left),
    };
  }, [
    androidSmall2Position,
    androidSmall2Width,
    androidSmall2Height,
    androidSmall2Top,
    androidSmall2Right,
    androidSmall2Bottom,
    androidSmall2Left,
  ]);

  const navigation = useNavigation();

  return (
    <View style={[styles.androidSmall2, androidSmall2Style]}>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.androidSmall2Child} />
      <Image
        style={[styles.androidSmall2Item, styles.image5IconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <View style={[styles.androidSmall2Inner, styles.androidChildShadowBox]} />
      <View style={[styles.rectangleView, styles.settingsPosition]} />
      <View style={[styles.androidSmall2Child1, styles.exitPosition]} />
      <Pressable
        style={styles.settingsPosition}
        onPress={() => navigation.navigate("AndroidSmall")}
      >
        <Text style={[styles.settings1, styles.exitTypo]}>SETTINGS</Text>
      </Pressable>
      <Text style={[styles.exit, styles.exitTypo]}>EXIT</Text>
      <View style={[styles.androidSmall2Child2, styles.testPosition]} />
      <Pressable
        style={styles.tutorialsPosition}
        onPress={() => navigation.navigate("TUTORIALS")}
      >
        <Text style={[styles.tutorials1, styles.exitTypo]}>TUTORIALS</Text>
      </Pressable>
      <Pressable
        style={styles.testPosition}
        onPress={() => navigation.navigate("TEST")}
      >
        <Text style={[styles.test1, styles.exitTypo]}>TEST</Text>
      </Pressable>
      <Text style={[styles.breakingSilence, styles.exitTypo]}>
        BREAKING SILENCE
      </Text>
      <Image
        style={[styles.image5Icon, styles.image5IconPosition]}
        contentFit="cover"
        source={require("../assets/image-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image5IconPosition: {
    left: "50%",
    position: "absolute",
  },
  androidChildShadowBox: {
    height: 48,
    borderWidth: 2,
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  settingsPosition: {
    top: 384,
    left: "50%",
    position: "absolute",
  },
  exitPosition: {
    top: 569,
    left: "50%",
    position: "absolute",
  },
  exitTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  testPosition: {
    top: 320,
    left: "50%",
    position: "absolute",
  },
  image2Icon: {
    height: 648,
    left: 0,
    top: 0,
    position: "absolute",
    width: 360,
  },
  androidSmall2Child: {
    backgroundColor: Color.colorLimegreen_100,
    borderBottomWidth: 3,
    height: 61,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    width: 360,
  },
  androidSmall2Item: {
    marginLeft: -69,
    top: 95,
    width: 139,
    height: 134,
  },
  androidSmall2Inner: {
    width: 155,
    marginLeft: -77,
    height: 48,
    borderWidth: 2,
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 256,
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    height: 48,
    borderWidth: 2,
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 155,
    marginLeft: -77,
  },
  androidSmall2Child1: {
    marginLeft: -48,
    width: 96,
    height: 48,
    borderWidth: 2,
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 569,
  },
  settings1: {
    marginLeft: -44,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  exit: {
    marginLeft: -19,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
    top: 569,
    left: "50%",
    position: "absolute",
  },
  androidSmall2Child2: {
    height: 48,
    borderWidth: 2,
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 155,
    marginLeft: -77,
  },
  tutorials1: {
    marginLeft: -51,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  tutorialsPosition: {
    top: 256,
    left: "50%",
    position: "absolute",
  },
  test1: {
    marginLeft: -21,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  breakingSilence: {
    marginLeft: -119,
    top: -3,
    fontSize: FontSize.size_18xl,
    left: "50%",
    position: "absolute",
  },
  image5Icon: {
    marginLeft: -60,
    top: 110,
    width: 107,
    height: 104,
  },
  androidSmall2: {
    backgroundColor: Color.colorWhite,
    height: 640,
    overflow: "hidden",
    width: 360,
  },
});

export default HOME2;
