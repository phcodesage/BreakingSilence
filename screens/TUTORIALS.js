import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TUTORIALS = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    back1Typo: {
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    tutorialsShadowBox: {
      width: width * 0.54,
      left: width * 0.23,
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
    },
    easyPosition: {
      top: height * 0.233,
      position: "absolute",
    },
    moderatePosition: {
      top: height * 0.336,
      position: "absolute",
    },
    tutorialsChildPosition: {
      height: height * 0.095,
      backgroundColor: Color.colorLimegreen_100,
      left: 0,
      top: 0,
      width: width,
      position: "absolute",
    },
    image3Icon: {
      top: 0,
      left: 0,
      height: height,
      width: width,
      position: "absolute",
    },
    tutorialsChild: {
      marginLeft: width * -0.142,
      width: width * 0.286,
      height: height * 0.075,
      borderWidth: 2,
      backgroundColor: Color.colorLimegreen_200,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      left: "50%",
      bottom: height * 0.05,
      position: "absolute",
    },
    back1: {
      marginLeft: width * -0.067,
      fontSize: FontSize.size_9xl,
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    back: {
      left: "50%",
      bottom: height * 0.0625,
      position: "absolute",
    },
    tutorialsItem: {
      top: height * 0.233,
      position: "absolute",
    },
    easy1: {
      marginLeft: width * -0.064,
      fontSize: FontSize.size_9xl,
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    easy: {
      left: "50%",
    },
    tutorialsInner: {
      width: width * 0.54,
      left: width * 0.23,
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
    },
    moderate1: {
      marginLeft: width * -0.139,
      fontSize: FontSize.size_9xl,
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    moderate: {
      left: "50%",
    },
    rectangleView: {
      top: height * 0.439,
      position: "absolute",
    },
    intermediate1: {
      marginLeft: width * -0.178,
      fontSize: FontSize.size_9xl,
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    intermediate: {
      top: height * 0.441,
      left: "50%",
      position: "absolute",
    },
    tutorialsChild2: {
      borderBottomWidth: 3,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      height: height * 0.095,
      backgroundColor: Color.colorLimegreen_100,
      left: 0,
      top: 0,
    },
    difficulty: {
      marginLeft: width * -0.194,
      top: height * -0.003,
      fontSize: FontSize.size_18xl,
      left: "50%",
      position: "absolute",
    },
    tutorials: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: height,
      overflow: "hidden",
    },
  });

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

export default TUTORIALS;