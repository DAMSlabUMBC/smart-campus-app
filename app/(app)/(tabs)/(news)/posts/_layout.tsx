import { Stack } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

export default function NewsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="[id]" />
    </Stack>
  );
}

const styles = ScaledSheet.create({
  content: {
    backgroundColor: "transparent",
  },
});
