import { Stack } from "expo-router";
import { useAssets } from "expo-asset";
import { Image, ImageBackground } from "expo-image";
import { ScaledSheet } from "react-native-size-matters";
import { SessionProvider } from "@/hooks/ctx";

export default function RootLayout() {
  const [assets, error] = useAssets([
    require("../../assets/images/umbc_bg.jpg"),
  ]);

  return (
    <ImageBackground
      source={
        assets && assets[0] && assets[0].uri
          ? { uri: assets[0].uri }
          : undefined
      }
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.5 }}
      contentFit="cover"
      priority={"high"}
      transition={1000}
    >
      <Stack
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          contentStyle: styles.content,
          // animation: "fade",
          // animationDuration: 1000,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="concern" />
        <Stack.Screen name="mission" />
      </Stack>
    </ImageBackground>
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
