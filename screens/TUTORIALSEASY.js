import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TUTORIALSEASY = () => {
  const navigation = useNavigation();

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
 used to indicate the desire for 
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

const styles = StyleSheet.create({
  image1IconLayout: {
    width: 360,
    top: 0,
  },
  tutorialsChildShadowBox: {
    top: 258,
    height: 88,
    width: 97,
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
    left: 241,
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
    top: 468,
    height: 88,
    width: 97,
    position: "absolute",
  },
  rectangleIconPosition: {
    top: 365,
    height: 88,
    width: 97,
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
    width: 360,
    top: 0,
    position: "absolute",
    height: 640,
  },
  tutorialsEasyChild: {
    top: 363,
    height: 88,
    width: 97,
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
    left: 19,
    position: "absolute",
  },
  tutorialsEasyItem: {
    left: 18,
  },
  tutorialsEasyInner: {
    top: 468,
    height: 88,
    width: 97,
    position: "absolute",
  },
  rectangleView: {
    left: 131,
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
    top: 468,
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
    top: 468,
    left: 19,
  },
  tutorialsEasyChild2: {
    left: 241,
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
    height: 59,
    width: 360,
    top: 0,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  tutorials: {
    marginLeft: -84,
    top: -4,
    fontSize: FontSize.size_18xl,
    left: "50%",
    position: "absolute",
  },
  tutorialsEasyChild4: {
    top: 76,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    width: 361,
    height: 165,
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
    left: 131,
  },
  tutorialsEasyChild5: {
    left: 129,
  },
  tutorialsEasyChild6: {
    left: 240,
  },
  tutorialsEasyChild7: {
    marginLeft: -52,
    top: 577,
    backgroundColor: Color.colorLimegreen_200,
    width: 103,
    height: 48,
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
    marginLeft: -27,
    fontSize: FontSize.size_9xl,
  },
  back: {
    top: 576,
  },
  image9Icon: {
    top: 501,
    left: 266,
    width: 48,
    height: 22,
    position: "absolute",
  },
  aSignMade: {
    top: 91,
    left: 132,
    fontSize: 15,
    width: 219,
    height: 110,
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
    top: 320,
    left: 76,
    width: 43,
    height: 51,
    position: "absolute",
  },
  image11Icon: {
    top: 265,
    left: 36,
    width: 62,
    height: 72,
    position: "absolute",
  },
  image10Icon: {
    top: 96,
    left: 6,
    width: 121,
    height: 116,
    position: "absolute",
  },
  tutorialsEasy: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 640,
  },
});

export default TUTORIALSEASY;
