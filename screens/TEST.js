import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TEST = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.test}>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.testChild} />
      <Text style={[styles.test1, styles.test1Typo]}>TEST</Text>
      <View style={styles.testItem} />
      <View style={[styles.testInner, styles.testInnerShadowBox]} />
      <View style={[styles.rectangleView, styles.backPosition]} />
      <Pressable
        style={styles.backPosition}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back1, styles.test1Typo]}>BACK</Text>
      </Pressable>
      <Image
        style={styles.image13Icon}
        contentFit="cover"
        source={require("../assets/image-13.png")}
      />
      <Image
        style={styles.image14Icon}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  test1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  testInnerShadowBox: {
    borderWidth: 2,
    elevation: 6,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  backPosition: {
    top: 573,
    left: "50%",
    position: "absolute",
  },
  image4Icon: {
    height: 648,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  testChild: {
    borderBottomWidth: 3,
    height: 61,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorLimegreen_100,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  test1: {
    marginLeft: -29,
    top: -3,
    fontSize: FontSize.size_18xl,
    left: "50%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
    position: "absolute",
  },
  testItem: {
    top: 98,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.colorBlack,
    height: 277,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 360,
    left: 0,
    position: "absolute",
  },
  testInner: {
    top: 406,
    left: 112,
    width: 136,
    height: 130,
    backgroundColor: Color.colorLimegreen_100,
    borderWidth: 2,
    elevation: 6,
    shadowRadius: 6,
    position: "absolute",
  },
  rectangleView: {
    marginLeft: -42,
    backgroundColor: Color.colorLimegreen_200,
    width: 85,
    height: 48,
    borderWidth: 2,
    elevation: 6,
    shadowRadius: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  back1: {
    marginLeft: -25,
    fontSize: FontSize.size_9xl,
  },
  image13Icon: {
    top: 162,
    left: 92,
    width: 156,
    height: 148,
    position: "absolute",
  },
  image14Icon: {
    top: 418,
    left: 147,
    width: 65,
    height: 113,
    position: "absolute",
  },
  test: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default TEST;
