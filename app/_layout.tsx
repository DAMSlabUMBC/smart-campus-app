import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { SessionProvider } from "@/hooks/ctx";

SplashScreen.preventAutoHideAsync(); // Prevent splash screen from auto-hiding

export default function AppLayout() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-SemiBoldItalic": require("@/assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("@/assets/fonts/Poppins-BoldItalic.ttf"),
  });

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen
    }
  }, [fontsLoaded]);

  // Return null if fonts are not loaded
  if (!fontsLoaded) {
    return null; // Render nothing
  }

  return (
    <SessionProvider>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: "#121212" }}
          edges={[]}
        >
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#121212" },
            }}
          >
            <Stack.Screen name="(onboarding)" />
            <Stack.Screen name="auth" />
            <Stack.Screen name="(app)" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </SessionProvider>
  );
}
