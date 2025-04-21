import { Stack } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

export default function CameraLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}

const styles = ScaledSheet.create({
  content: {
    backgroundColor: "transparent",
  },
});
