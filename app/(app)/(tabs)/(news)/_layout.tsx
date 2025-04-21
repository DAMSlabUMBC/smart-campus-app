import { Stack } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function DetailsLayout() {
  const color = useThemeColor({ light: "#383838", dark: "#fff" }, "text");
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "transparent" },
        headerTintColor: color,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="news" options={{ title: "News" }} />
      <Stack.Screen name="posts" options={{ title: "Post" }} />
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
