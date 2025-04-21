import { Stack } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HomeLayout() {
  const color = useThemeColor({ light: "#383838", dark: "#fff" }, "text");

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: color,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="home" options={{ title: "Home" }} />
      <Stack.Screen
        name="camera"
        options={{
          title: "Camera",
          contentStyle: {
            flex: 1,
            marginHorizontal: 0,
            marginTop: 0,
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen name="sensors" options={{ title: "Sensors" }} />
      <Stack.Screen name="locations" options={{ title: "Locations " }} />
    </Stack>
  );
}

const styles = ScaledSheet.create({
  content: {
    flex: 1,
    marginTop: "12@s",
    marginHorizontal: "16@s",
    backgroundColor: "transparent",
  },
});
