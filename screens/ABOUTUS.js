import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ABOUTUS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUs}>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-51.png")}
      />
      <View style={styles.aboutUsChild} />
      <Image
        style={[styles.aboutUsItem, styles.aboutUsItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-16.png")}
      />
      <Text style={[styles.whoWeAre, styles.whoWeAreTypo]}>Who We Are</Text>
      <Text style={[styles.aboutUs1, styles.whoWeAreTypo]}>About Us</Text>
      <View style={[styles.aboutUsInner, styles.aboutShadowBox]} />
      <View style={styles.rectangleView} />
      <Text
        style={[styles.ourGroupIs, styles.ourGroupTypo]}
      >{`Our group is dedicated to  creating a creative sign linguistic app that 
encourages both accessibility
and exclusivity. By means of
interactive guides and actual
characteristics for time 
translation,our goal to close
gaps in communication and
enable users everywhere. 
With continuous user input
and a dedication to our goal,  Not only are we developing
an app; We're making the
globe more welcoming.  `}</Text>
      <Image
        style={[styles.rectangleIcon, styles.aboutUsItemLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Text style={[styles.ourMission, styles.whoWeAreTypo]}>Our Mission</Text>
      <View style={[styles.aboutUsChild1, styles.back2Position]} />
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
        <Text style={[styles.back1, styles.backTypo]}>BACK</Text>
      </Pressable>
      <Text
        style={[styles.ourGoalIs, styles.ourGroupTypo]}
      >{`Our goal is to break down
barriers and promote
inclusive by means of 
technology. We picture in
a world where dialogue is
genuinely global, where
each and every has the 
resources necessary for
connection, learn and give
their complete expression. 
 
`}</Text>
      <Pressable
        style={styles.back2Position}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back3, styles.backTypo]}>BACK</Text>
      </Pressable>
      <View style={[styles.aboutUsChild2, styles.aboutShadowBox]} />
      <Text
        style={[styles.ourGroupOf, styles.ourGroupTypo]}
      >{`Our group of developers is 
enthusiastic about
accessibility. Our objectives
are to increase accessibility 
to sign language,
empower the deaf 
population, and close 
communication barriers. `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutUsItemLayout: {
    width: 215,
    height: 61,
    left: "50%",
    position: "absolute",
  },
  whoWeAreTypo: {
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_18xl,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  aboutShadowBox: {
    width: 303,
    marginLeft: -151,
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  ourGroupTypo: {
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  back2Position: {
    top: 1333,
    left: "50%",
    position: "absolute",
  },
  backTypo: {
    fontSize: FontSize.size_9xl,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
  },
  image5Icon: {
    top: 8,
    left: 0,
    width: 360,
    height: 1401,
    position: "absolute",
  },
  aboutUsChild: {
    marginLeft: -86,
    width: 172,
    height: 61,
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
    left: "50%",
    top: 30,
    position: "absolute",
  },
  aboutUsItem: {
    marginLeft: -103,
    top: 536,
  },
  whoWeAre: {
    marginLeft: -77,
    top: 533,
  },
  aboutUs1: {
    marginLeft: -62,
    top: 30,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_18xl,
  },
  aboutUsInner: {
    top: 107,
    height: 395,
  },
  rectangleView: {
    marginLeft: -148,
    top: 993,
    width: 297,
    height: 275,
    backgroundColor: Color.colorGainsboro_200,
    borderWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "50%",
    position: "absolute",
  },
  ourGroupIs: {
    marginTop: -200,
    marginLeft: -143,
    top: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: "50%",
  },
  rectangleIcon: {
    marginLeft: -108,
    top: 896,
  },
  ourMission: {
    marginLeft: -82,
    top: 897,
  },
  aboutUsChild1: {
    marginLeft: -48,
    width: 97,
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
    top: 1333,
  },
  back1: {
    marginLeft: -25,
    color: "transparent",
  },
  back: {
    top: 1210,
    left: "50%",
    position: "absolute",
  },
  ourGoalIs: {
    top: 1009,
    left: 51,
  },
  back3: {
    marginLeft: -24,
    color: Color.colorBlack,
    fontSize: FontSize.size_9xl,
  },
  aboutUsChild2: {
    top: 623,
    height: 239,
  },
  ourGroupOf: {
    marginTop: 326,
    marginLeft: -135,
    top: "50%",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    left: "50%",
  },
  aboutUs: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
  },
});

export default ABOUTUS;
