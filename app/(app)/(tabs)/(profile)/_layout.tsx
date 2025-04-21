import { Stack } from "expo-router";
import { scale, ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function ProfileLayout() {
  const color = useThemeColor({ light: "#383838", dark: "#fff" }, "text");
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: color,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      <Stack.Screen
        name="workInProgress"
        options={{
          title: "Settings",
          contentStyle: {
            flex: 1,
            marginHorizontal: scale(24),
            marginTop: 0,
            backgroundColor: "transparent",
          },
        }}
      />
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
