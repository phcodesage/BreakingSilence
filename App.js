const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import HOME from "./screens/HOME";
import TUTORIALSEASY from "./screens/TUTORIALSEASY";
import TUTORIALS from "./screens/TUTORIALS";
import TEST from "./screens/TEST";
import AndroidSmall from "./screens/AndroidSmall";
import ABOUTUS from "./screens/ABOUTUS";
import CONTACTUS from "./screens/CONTACTUS";
import HOME2 from "./components/HOME2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Koulen-Regular": require("./assets/fonts/Koulen-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TUTORIALSEASY"
              component={TUTORIALSEASY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TUTORIALS"
              component={TUTORIALS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TEST"
              component={TEST}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidSmall"
              component={AndroidSmall}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ABOUTUS"
              component={ABOUTUS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CONTACTUS"
              component={CONTACTUS}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
