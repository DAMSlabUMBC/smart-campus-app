import { Redirect, Stack } from "expo-router";
import { useSession } from "@/hooks/ctx";

export default function AppLayout() {
  // const { session, isLoading } = useSession(); // Get session and loading state

  // if (isLoading) {
  //   return <Text>Loading...</Text>; // Render loading indicator (change later)
  // }

  // if (!session) {
  //   return <Redirect href="/auth/sign-in" />; // Redirect to sign-in if not signed in
  // }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
