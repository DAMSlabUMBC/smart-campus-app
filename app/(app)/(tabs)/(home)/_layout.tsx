import { Stack } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="details" />
      <Stack.Screen name="locations" />
    </Stack>
  );
}

const styles = ScaledSheet.create({
  content: {
    flex: 1,
    marginTop: "64@s",
    marginHorizontal: "16@s",
    backgroundColor: "transparent",
  },
});
