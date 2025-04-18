import { ImageBackground } from "expo-image";
import { ScaledSheet } from "react-native-size-matters";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={[]}>
        <ImageBackground
          source={require("../../assets/images/umbc_bg.jpg")}
          style={{ flex: 1 }}
          imageStyle={{ opacity: 0.4 }}
          contentFit="cover"
          priority={"high"}
        >
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: styles.content,
            }}
          >
            <Stack.Screen name="sign-in" />
          </Stack>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = ScaledSheet.create({
  content: {
    flex: 1,
    marginTop: "64@s",
    marginBottom: "32@s",
    marginHorizontal: "28@s",
    backgroundColor: "transparent",
  },
});
