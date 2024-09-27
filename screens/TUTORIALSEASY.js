import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TUTORIALSEASY = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    image1IconLayout: {
      width: width,
      height: height,
    },
    tutorialsChildShadowBox: {
      top: height * 0.403,
      height: height * 0.1375,
      width: width * 0.269,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_100,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      position: "absolute",
    },
    tutorialsShadowBox: {
      left: width * 0.669,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_100,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
    },
    tutorialsPosition1: {
      top: height * 0.731,
      height: height * 0.1375,
      width: width * 0.269,
      position: "absolute",
    },
    rectangleIconPosition: {
      top: height * 0.57,
      height: height * 0.1375,
      width: width * 0.269,
      position: "absolute",
    },
    tutorialsChildBorder: {
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_100,
      left: 0,
      position: "absolute",
    },
    back1Typo: {
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    tutorialsPosition: {
      left: "50%",
      position: "absolute",
    },
    image1Icon: {
      left: 0,
      top: 0,
      position: "absolute",
    },
    tutorialsEasyChild: {
      top: height * 0.567,
      height: height * 0.1375,
      width: width * 0.269,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_100,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      left: width * 0.053,
      position: "absolute",
    },
    tutorialsEasyItem: {
      left: width * 0.05,
    },
    tutorialsEasyInner: {
      top: height * 0.731,
      height: height * 0.1375,
      width: width * 0.269,
      position: "absolute",
    },
    rectangleView: {
      left: width * 0.364,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: Color.colorLimegreen_100,
    },
    tutorialsEasyChild1: {
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      backgroundColor: Color.colorLimegreen_100,
      left: width * 0.053,
    },
    tutorialsEasyChild2: {
      left: width * 0.669,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_100,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
    },
    tutorialsEasyChild3: {
      borderBottomWidth: 3,
      height: height * 0.092,
      width: width,
      top: 0,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
    },
    tutorials: {
      marginLeft: width * -0.233,
      top: height * -0.006,
      fontSize: FontSize.size_18xl,
      left: "50%",
      position: "absolute",
    },
    tutorialsEasyChild4: {
      top: height * 0.119,
      borderTopWidth: 2,
      borderBottomWidth: 2,
      width: width,
      height: height * 0.258,
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
    },
    rectangleIcon: {
      left: width * 0.364,
    },
    tutorialsEasyChild5: {
      left: width * 0.358,
    },
    tutorialsEasyChild6: {
      left: width * 0.667,
    },
    tutorialsEasyChild7: {
      marginLeft: width * -0.144,
      top: height * 0.902,
      backgroundColor: Color.colorLimegreen_200,
      width: width * 0.286,
      height: height * 0.075,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
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
      marginLeft: width * -0.075,
      fontSize: FontSize.size_9xl,
    },
    back: {
      top: height * 0.9,
    },
    image9Icon: {
      top: height * 0.783,
      left: width * 0.739,
      width: width * 0.133,
      height: height * 0.034,
      position: "absolute",
    },
    aSignMade: {
      top: height * 0.142,
      left: width * 0.367,
      fontSize: width * 0.042,
      width: width * 0.608,
      height: height * 0.172,
      textShadow: [
        {
          color: "rgba(0, 0, 0, 0.25)",
          width: 0,
          radius: 6,
        },
      ],
      position: "absolute",
    },
    image12Icon: {
      top: height * 0.5,
      left: width * 0.211,
      width: width * 0.119,
      height: height * 0.08,
      position: "absolute",
    },
    image11Icon: {
      top: height * 0.414,
      left: width * 0.1,
      width: width * 0.172,
      height: height * 0.113,
      position: "absolute",
    },
    image10Icon: {
      top: height * 0.15,
      left: width * 0.017,
      width: width * 0.336,
      height: height * 0.181,
      position: "absolute",
    },
    tutorialsEasy: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      overflow: "hidden",
      height: height,
    },
  });

  return (
    <View style={styles.tutorialsEasy}>
      <Image
        style={[styles.image1Icon, styles.image1IconLayout]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <View style={styles.tutorialsEasyChild} />
      <View
        style={[styles.tutorialsEasyItem, styles.tutorialsChildShadowBox]}
      />
      <View style={[styles.tutorialsEasyInner, styles.tutorialsShadowBox]} />
      <View style={[styles.rectangleView, styles.tutorialsPosition1]} />
      <View style={[styles.tutorialsEasyChild1, styles.tutorialsPosition1]} />
      <View
        style={[styles.tutorialsEasyChild2, styles.rectangleIconPosition]}
      />
      <View style={[styles.tutorialsEasyChild3, styles.tutorialsChildBorder]} />
      <Text style={[styles.tutorials, styles.back1Typo]}> TUTORIALS</Text>
      <View style={[styles.tutorialsEasyChild4, styles.tutorialsChildBorder]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <View
        style={[styles.tutorialsEasyChild5, styles.tutorialsChildShadowBox]}
      />
      <View
        style={[styles.tutorialsEasyChild6, styles.tutorialsChildShadowBox]}
      />
      <View style={[styles.tutorialsEasyChild7, styles.tutorialsPosition]} />
      <Pressable
        style={[styles.back, styles.tutorialsPosition]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back1, styles.back1Typo]}>BACK</Text>
      </Pressable>
      <Image
        style={styles.image9Icon}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Text
        style={[styles.aSignMade, styles.back1Typo]}
      >{`: a sign made by holding the palm
 outward and forming a V with 
the index and middle fingers and
 used to indicate the desire for 
peace.`}</Text>
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Image
        style={styles.image11Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={styles.image10Icon}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
    </View>
  );
};

export default TUTORIALSEASY;