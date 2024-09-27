import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, ScrollView, Dimensions, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const ABOUTUS = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    aboutUs: {
      flex: 1,
      width: "100%",
      height: "100%",

    },
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    scrollView: {
      flexGrow: 1,
    },
    contentContainer: {
      alignItems: 'center',
      paddingBottom: height * 0.1,
    },
    aboutUsItemLayout: {
      width: width * 0.6,
      height: height * 0.095,
      position: "absolute",
    },
    whoWeAreTypo: {
      textAlign: "left",
      fontFamily: FontFamily.koulenRegular,
      fontSize: width * 0.08,
      color: Color.colorBlack,
      position: "absolute",
    },
    aboutShadowBox: {
      width: width * 0.84,
      backgroundColor: Color.colorGainsboro_200,
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
      position: "absolute",
      justifyContent: 'center',
      alignItems: 'center',
      padding: width * 0.04,
    },
    ourGroupTypo: {
      textAlign: "center",
      fontFamily: FontFamily.interMedium,
      fontWeight: "500",
      fontSize: width * 0.045,
      color: Color.colorBlack,
    },
    backTypo: {
      fontSize: width * 0.06,
      textAlign: "center",
      fontFamily: FontFamily.koulenRegular,
      
    },
    aboutUsChild: {
      width: width * 0.48,
      height: height * 0.095,
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
      position: "absolute",
      top: height * 0.047,
    },
    aboutUsItem: {
      top: height * 0.838,
    },
    whoWeAre: {
      top: height * 0.833,
    },
    aboutUs1: {
      top: height * 0.047,
    },
    aboutUsInner: {
      top: height * 0.167,
      height: height * 0.617,
    },
    rectangleView: {
      top: height * 1.55,
      height: height * 0.43,
    },
    ourGroupIs: {
      width: '100%',
    },
    rectangleIcon: {
      top: height * 1.4,
    },
    ourMission: {
      top: height * 1.402,
    },
    aboutUsChild1: {
      top: height * 2.083,
      width: width * 0.27,
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
      position: "absolute",
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    back1: {
      color: "transparent",

    },
    back: {
      top: height * 1.891,
      position: "absolute",

    },
    ourGoalIs: {
      width: '100%',
    },
    back3: {
      color: Color.colorBlack,

    },
    aboutUsChild2: {
      top: height * 0.973,
      height: height * 0.373,
    },
    ourGroupOf: {
      width: '100%',
    },
  });

  return (
    <View style={styles.aboutUs}>
      <ImageBackground
        source={require("../assets/image-51.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView}>
          <View style={styles.aboutUsChild} />
          <Image
            style={[styles.aboutUsItem, styles.aboutUsItemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-16.png")}
          />
          <Text style={[styles.whoWeAre, styles.whoWeAreTypo]}>Who We Are</Text>
          <Text style={[styles.aboutUs1, styles.whoWeAreTypo]}>About Us</Text>
          <View style={[styles.aboutUsInner, styles.aboutShadowBox]}>
            <Text style={[styles.ourGroupIs, styles.ourGroupTypo]}>
              {`Our group is dedicated to creating a creative signlinguistic app that 
              encourages both accessibility
              and exclusivity. By means of
              interactive guides and actual
              characteristics for time 
              translation,our goal to close
              gaps in communication and
              enable users everywhere. 
              With continuous user input
              and a dedication to our goal, Not only are we developing
              an app; We're making the
              globe more welcoming.`}
            </Text>
          </View>
          <Image
            style={[styles.rectangleIcon, styles.aboutUsItemLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-18.png")}
          />
          <Text style={[styles.ourMission, styles.whoWeAreTypo]}>Our Mission</Text>
          <View style={[styles.rectangleView, styles.aboutShadowBox]}>
            <Text style={[styles.ourGoalIs, styles.ourGroupTypo]}>
              {`Our goal is to break down
              barriers and promote
              inclusive by means of 
              technology. We picture in
              a world where dialogue is
              genuinely global, where
              each and every has the 
              resources necessary for
              connection, learn and give
              their complete expression. 
              
              `}
            </Text>
          </View>
          <Pressable
            style={styles.aboutUsChild1}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.back3, styles.backTypo]}>BACK</Text>
          </Pressable>
          <View style={[styles.aboutUsChild2, styles.aboutShadowBox]}>
            <Text style={[styles.ourGroupOf, styles.ourGroupTypo]}>
              {`Our group of developers is 
              enthusiastic about
              accessibility. Our objectives
              are to increase accessibility 
              to sign language,
              empower the deaf 
              population, and close 
              communication barriers.`}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default ABOUTUS;