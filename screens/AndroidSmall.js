import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import SettingsContainer from "../components/SettingsContainer";
import { Color } from "../GlobalStyles";

const AndroidSmall = () => {
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

const styles = StyleSheet.create({
  framePosition: {
    height: 648,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorLimegreen_100,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderBottomWidth: 3,
    height: 61,
    width: 360,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame: {
    overflow: "hidden",
  },
  androidSmall6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default AndroidSmall;
