import { useEffect, useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Colors } from "./constants/CustomColor";
import BottomTabBar from "./navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { fontFamilies } from "./constants/CustomFonts";
import StackNav from "./navigation/Stack";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(fontFamilies);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  async function onNavigationReady() {
    await SplashScreen.hideAsync(); // just hide the splash screen after navigation ready
  }

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.primaryblue}
      />
      <NavigationContainer onReady={onNavigationReady}>
        <StackNav />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
