import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    GGSansBold: require("../assets/fonts/GGSans/ggsans-Bold.ttf"),
    GGSansBoldItalic: require("../assets/fonts/GGSans/ggsans-BoldItalic.ttf"),
    GGSansExtraBold: require("../assets/fonts/GGSans/ggsans-ExtraBold.ttf"),
    GGSansExtraBoldItalic: require("../assets/fonts/GGSans/ggsans-ExtraBoldItalic.ttf"),
    GGSansMedium: require("../assets/fonts/GGSans/ggsans-Medium.ttf"),
    GGSansMediumItalic: require("../assets/fonts/GGSans/ggsans-MediumItalic.ttf"),
    GGSansNormal: require("../assets/fonts/GGSans/ggsans-Normal.ttf"),
    GGSansNormalItalic: require("../assets/fonts/GGSans/ggsans-NormalItalic.ttf"),
    GGSansSemiBold: require("../assets/fonts/GGSans/ggsans-Semibold.ttf"),
    GGSansSemiBoldItalic: require("../assets/fonts/GGSans/ggsans-SemiboldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(authentication-tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard-tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard-screen)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
