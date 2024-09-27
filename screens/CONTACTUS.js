import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CONTACTUS = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    back1Typo: {
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    contactPosition: {
      height: height * 0.091,
      left: "50%",
      position: "absolute",
    },
    contactShadowBox: {
      borderWidth: 2,
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
    rectanglePosition: {
      left: "50%",
      position: "absolute",
    },
    teamDreamTypo: {
      fontSize: width * 0.044,
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
      left: "50%",
      position: "absolute",
    },
    backPosition: {
      top: height * 0.892,
      left: "50%",
      position: "absolute",
    },
    image5Icon: {
      top: height * -0.0125,
      height: height * 1.0125,
      width: width,
      left: 0,
      position: "absolute",
    },
    contactUsChild: {
      top: 0,
      backgroundColor: Color.colorLimegreen_100,
      borderBottomWidth: 3,
      height: height * 0.095,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      width: width,
      left: 0,
      position: "absolute",
    },
    contactUs1: {
      marginLeft: width * -0.217,
      top: height * -0.0047,
      fontSize: width * 0.1,
      left: "50%",
      position: "absolute",
    },
    contactUsItem: {
      marginLeft: width * -0.225,
      top: height * 0.18,
      width: width * 0.453,
      borderWidth: 2,
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
      backgroundColor: Color.colorGainsboro_100,
    },
    contactUsInner: {
      marginLeft: width * -0.219,
      top: height * 0.475,
      width: width * 0.442,
    },
    rectangleView: {
      marginLeft: width * -0.261,
      top: height * 0.309,
      width: width * 0.522,
      height: height * 0.0625,
      backgroundColor: Color.colorGainsboro_100,
      borderWidth: 2,
      boxShadowOpacity: 1,
      elevation: 6,
      boxShadowRadius: 6,
      boxShadowOffset: {
        width: 0,
        height: 4,
      },
      boxShadowColor: "rgba(0, 0, 0, 0.25)",
      left: "50%",
      position: "absolute",
    },
    rectangleIcon: {
      marginLeft: width * -0.233,
      top: height * 0.597,
      width: width * 0.469,
      height: height * 0.0766,
    },
    teamDream: {
      marginLeft: width * -0.05,
      top: height * 0.6125,
    },
    teamdreamgmailcom: {
      marginLeft: width * -0.186,
      top: height * 0.319,
    },
    messageUs: {
      marginLeft: width * -0.161,
      top: height * 0.186,
      fontSize: width * 0.075,
      left: "50%",
      position: "absolute",
    },
    ourSocials: {
      marginLeft: width * -0.169,
      top: height * 0.486,
      fontSize: width * 0.072,
      left: "50%",
      position: "absolute",
    },
    image6Icon: {
      top: height * 0.608,
      left: width * 0.314,
      width: width * 0.125,
      height: height * 0.0547,
      position: "absolute",
    },
    contactUsChild1: {
      marginLeft: width * -0.125,
      backgroundColor: Color.colorLimegreen_200,
      width: width * 0.253,
      height: height * 0.075,
      borderWidth: 2,
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
      top: height * 0.892,
    },
    back1: {
      marginLeft: width * -0.069,
      fontSize: width * 0.067,
    },
    contactUs: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: height,
      overflow: "hidden",
    },
  });

  return (
    <View style={styles.contactUs}>
      <Image
        style={styles.image5Icon}
        resizeMode="cover"
        source={require("../assets/image-51.png")}
      />
      <View style={styles.contactUsChild} />
      <Text style={[styles.contactUs1, styles.back1Typo]}>CONTACT US</Text>
      <View style={[styles.contactUsItem, styles.contactPosition, styles.contactShadowBox]} />
      <View style={[styles.contactUsInner, styles.contactPosition, styles.contactShadowBox]} />
      <View style={[styles.rectangleView, styles.contactShadowBox]} />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-18.png")}
      />
      <Text style={[styles.teamDream, styles.teamDreamTypo]}>TEAM DREAM</Text>
      <Text style={[styles.teamdreamgmailcom, styles.teamDreamTypo]}>
        teamdream@gmail.com
      </Text>
      <Text style={[styles.messageUs, styles.back1Typo]}>MESSAGE US</Text>
      <Text style={[styles.ourSocials, styles.back1Typo]}>OUR SOCIALS</Text>
      <Image
        style={styles.image6Icon}
        resizeMode="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.contactUsChild1, styles.backPosition, styles.contactShadowBox]} />
      <Pressable
        style={styles.backPosition}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.back1, styles.back1Typo]}>BACK</Text>
      </Pressable>
    </View>
  );
};

export default CONTACTUS;