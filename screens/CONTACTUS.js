import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CONTACTUS = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contactUs}>
      <Image
        style={styles.image5Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.contactUsChild} />
      <Text style={[styles.contactUs1, styles.back1Typo]}>Contact Us</Text>
      <View style={[styles.contactUsItem, styles.contactPosition]} />
      <Image
        style={[styles.contactUsInner, styles.contactPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      />
      <View style={[styles.rectangleView, styles.contactShadowBox]} />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-23.png")}
      />
      <Text style={[styles.teamDream, styles.teamDreamTypo]}>@Team Dream</Text>
      <Text style={[styles.teamdreamgmailcom, styles.teamDreamTypo]}>
        teamdream@gmail.com
      </Text>
      <Text style={[styles.messageUs, styles.back1Typo]}>Message Us</Text>
      <Text style={[styles.ourSocials, styles.back1Typo]}>Our Socials:</Text>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={[styles.contactUsChild1, styles.backPosition]} />
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
  back1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
  },
  contactPosition: {
    height: 58,
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
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.koulenRegular,
    left: "50%",
    position: "absolute",
  },
  backPosition: {
    top: 571,
    left: "50%",
    position: "absolute",
  },
  image5Icon: {
    top: -8,
    height: 648,
    width: 360,
    left: 0,
    position: "absolute",
  },
  contactUsChild: {
    top: 0,
    backgroundColor: Color.colorLimegreen_100,
    borderBottomWidth: 3,
    height: 61,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 360,
    left: 0,
    position: "absolute",
  },
  contactUs1: {
    marginLeft: -78,
    top: -3,
    fontSize: FontSize.size_18xl,
    left: "50%",
    position: "absolute",
  },
  contactUsItem: {
    marginLeft: -81,
    top: 115,
    width: 163,
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
    marginLeft: -79,
    top: 304,
    width: 159,
  },
  rectangleView: {
    marginLeft: -94,
    top: 198,
    width: 188,
    height: 40,
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
    marginLeft: -84,
    top: 382,
    width: 169,
    height: 49,
  },
  teamDream: {
    marginLeft: -18,
    top: 392,
  },
  teamdreamgmailcom: {
    marginLeft: -67,
    top: 204,
  },
  messageUs: {
    marginLeft: -58,
    top: 119,
    fontSize: 27,
    left: "50%",
    position: "absolute",
  },
  ourSocials: {
    marginLeft: -61,
    top: 311,
    fontSize: 26,
    left: "50%",
    position: "absolute",
  },
  image6Icon: {
    top: 389,
    left: 113,
    width: 45,
    height: 35,
    position: "absolute",
  },
  contactUsChild1: {
    marginLeft: -45,
    backgroundColor: Color.colorLimegreen_200,
    width: 91,
    height: 48,
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
    top: 571,
  },
  back1: {
    marginLeft: -25,
    fontSize: FontSize.size_9xl,
  },
  contactUs: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default CONTACTUS;
