import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import HOME2 from "../components/HOME2";

const HOME = () => {
  return (
    <View style={styles.home}>
      <HOME2
        androidSmall2Position="absolute"
        androidSmall2Width="100%"
        androidSmall2Height="100%"
        androidSmall2Top="0%"
        androidSmall2Right="0%"
        androidSmall2Bottom="0%"
        androidSmall2Left="0%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    width: "100vw",
    height: 640,
  },
});

export default HOME;
