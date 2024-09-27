import * as React from "react";
import { Image, Dimensions, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const TEST = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const { width, height } = Dimensions.get("window");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const styles = StyleSheet.create({
    test: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    image4Icon: {
      width: width,
      height: height,
      left: 0,
      top: 0,
      position: "absolute",
    },
    testChild: {
      borderBottomWidth: 3,
      height: height * 0.095,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      backgroundColor: Color.colorLimegreen_100,
      width: "100%",
      left: 0,
      top: 0,
      position: "absolute",
    },
    test1: {
      marginLeft: width * -0.08,
      top: height * -0.005,
      fontSize: width * 0.12,
      left: "50%",
      textAlign: "left",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
      position: "absolute",
    },
    testItem: {
      top: height * 0.153,
      height: height * 0.433,
      backgroundColor: Color.colorBlack,
      width: "100%",
      left: 0,
      position: "absolute",
    },
    camera: {
      flex: 1,
    },
    testInner: {
      top: height * 0.634,
      left: "50%",
      width: width * 0.378,
      height: height * 0.203,
      backgroundColor: Color.colorLimegreen_100,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      position: "absolute",
      overflow: "hidden",
      transform: [{ translateX: width * -0.189 }],
    },
    backButtonContainer: {
      position: "absolute",
      bottom: height * 0.03,
      left: 0,
      right: 0,
      alignItems: "center",
    },
    backButton: {
      backgroundColor: Color.colorLimegreen_200,
      width: width * 0.236,
      height: height * 0.075,
      borderWidth: 2,
      borderColor: Color.colorBlack,
      borderStyle: "solid",
      justifyContent: "center",
      alignItems: "center",
    },
    back1: {
      fontSize: width * 0.067,
      textAlign: "center",
      color: Color.colorBlack,
      fontFamily: FontFamily.koulenRegular,
    },
    image13Icon: {
      top: height * 0.253,
      left: width * 0.256,
      width: width * 0.433,
      height: height * 0.231,
      position: "absolute",
    },
    image14Icon: {
      top: height * 0.653,
      left: width * 0.408,
      width: width * 0.181,
      height: height * 0.177,
      position: "absolute",
    },
  });

  return (
    <View style={styles.test}>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.testChild} />
      <Text style={styles.test1}>TEST</Text>
      <View style={styles.testItem}>
        <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={ref => setCameraRef(ref)} />
      </View>
      <View style={styles.testInner} />
      <View style={styles.backButtonContainer}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.back1}>BACK</Text>
        </Pressable>
      </View>
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

export default TEST;