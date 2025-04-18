import { Stack } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: styles.content,
      }}
    >
      <Stack.Screen name="profile" />
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
