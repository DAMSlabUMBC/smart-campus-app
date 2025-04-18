import { Tabs } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import { verticalScale } from "react-native-size-matters";

import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

interface TabLayoutProps {
  lightColor?: string;
  darkColor?: string;
}

export default function TabLayout({
  lightColor = "#fff",
  darkColor = "#121212",
}: TabLayoutProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: backgroundColor,
          paddingBottom: verticalScale(43), // Adjusted padding to accommodate the tab bar height
        },
        tabBarStyle: {
          backgroundColor: backgroundColor,
          borderTopWidth: verticalScale(1), // Added border at the top
          borderTopColor: "#575757", // Set the color for the top border
          paddingTop: verticalScale(8),
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: verticalScale(72),
        },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(news)"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
