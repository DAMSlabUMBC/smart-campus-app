import React from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

import Feather from "@expo/vector-icons/Feather";

import { ThemedPressable } from "@/components/ThemedPressable";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedCameraButtonProps {
  lightColor?: string;
  darkColor?: string;
  href?: string;
  [key: string]: any;
}

export default function ThemedCameraButton({
  lightColor,
  darkColor,
  href,
  style,
  ...props
}: ThemedCameraButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );

  return (
    <ThemedPressable
      onPress={() => {
        router.push(href as any);
      }}
      style={[
        { backgroundColor, borderColor },
        styles.locationContainer,
        style,
      ]}
    >
      <Feather
        name="camera"
        size={32}
        color="#687076"
        style={{ borderRadius: "100%" }}
      />
    </ThemedPressable>
  );
}

const styles = ScaledSheet.create({
  locationContainer: {
    padding: "8@ms",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100@ms",
    borderWidth: "1@s",
    overflow: "hidden",
  },
});
