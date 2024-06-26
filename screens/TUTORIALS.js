import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TUTORIALS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tutorials}>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.tutorialsChild} />
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={[styles.back1, styles.back1Typo]}>BACK</Text>
      </Pressable>
      <View style={[styles.tutorialsItem, styles.tutorialsShadowBox]} />
      <Pressable
        style={[styles.easy, styles.easyPosition]}
        onPress={() => navigation.navigate("TUTORIALSEASY")}
      >
        <Text style={[styles.easy1, styles.back1Typo]}>EASY</Text>
      </Pressable>
      <View style={[styles.tutorialsInner, styles.moderatePosition]} />
      <Pressable
        style={[styles.moderate, styles.moderatePosition]}
        onPress={() => navigation.navigate("TUTORIALSEASY")}
      >
        <Text style={[styles.moderate1, styles.back1Typo]}>MODERATE</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.tutorialsShadowBox]} />
      <Pressable
        style={styles.intermediate}
        onPress={() => navigation.navigate("TUTORIALSEASY")}
      >
        <Text style={[styles.intermediate1, styles.back1Typo]}>
          INTERMeDIATE
        </Text>
      </Pressable>
      <View style={styles.tutorialsChildPosition} />
      <View style={[styles.tutorialsChild2, styles.tutorialsChildPosition]} />
      <Text style={[styles.difficulty, styles.back1Typo]}>DIFFICULTY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  back1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  tutorialsShadowBox: {
    width: 193,
    left: 84,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  easyPosition: {
    top: 149,
    position: "absolute",
  },
  moderatePosition: {
    top: 215,
    position: "absolute",
  },
  tutorialsChildPosition: {
    height: 61,
    backgroundColor: Color.colorLimegreen_100,
    left: 0,
    top: 0,
    width: 360,
    position: "absolute",
  },
  image3Icon: {
    top: -8,
    left: 1,
    height: 648,
    width: 360,
    position: "absolute",
  },
  tutorialsChild: {
    marginLeft: -51,
    width: 103,
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
    left: "50%",
    top: 560,
    position: "absolute",
  },
  back1: {
    marginLeft: -24,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  back: {
    left: "50%",
    top: 560,
    position: "absolute",
  },
  tutorialsItem: {
    top: 149,
    position: "absolute",
  },
  easy1: {
    marginLeft: -23,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  easy: {
    left: "50%",
  },
  tutorialsInner: {
    width: 193,
    left: 84,
    height: 48,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorLimegreen_200,
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  moderate1: {
    marginLeft: -50,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  moderate: {
    left: "50%",
  },
  rectangleView: {
    top: 281,
    position: "absolute",
  },
  intermediate1: {
    marginLeft: -64,
    fontSize: FontSize.size_9xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  intermediate: {
    top: 282,
    left: "50%",
    position: "absolute",
  },
  tutorialsChild2: {
    borderBottomWidth: 3,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 61,
    backgroundColor: Color.colorLimegreen_100,
    left: 0,
    top: 0,
  },
  difficulty: {
    marginLeft: -70,
    top: -2,
    fontSize: FontSize.size_18xl,
    left: "50%",
    position: "absolute",
  },
  tutorials: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TUTORIALS;
