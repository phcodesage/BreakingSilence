import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Dimensions } from "react-native";
import SettingsContainer from "../components/SettingsContainer";
import { Color } from "../GlobalStyles";

const AndroidSmall = () => {
  const { width, height } = Dimensions.get('window');

  const styles = StyleSheet.create({
    androidSmall6: {
      backgroundColor: Color.colorWhite,
      flex: 1,
      width: "100%",
      height: "100%",
      overflow: "hidden",
    },
    framePosition: {
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      position: "absolute",
    },
    frameChild: {
      backgroundColor: Color.colorLimegreen_100,
      borderStyle: "solid",
      borderColor: Color.colorBlack,
      borderBottomWidth: 3,
      height: height * 0.095,
      width: "100%",
      left: 0,
      top: 0,
      position: "absolute",
    },
    frame: {
      overflow: "hidden",
      height: "100%",
      width: "100%",
    },
  });

  return (
    <View style={styles.androidSmall6}>
      <View style={[styles.frame, styles.framePosition]}>
        <Image
          style={styles.framePosition}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
        <View style={styles.frameChild} />
      </View>
      <SettingsContainer />
    </View>
  );
};

export default AndroidSmall;