import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Feather from "@expo/vector-icons/Feather";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ProfileCardProps {
  lightColor?: string;
  darkColor?: string;
  text: string;
  icon: React.ReactElement;
}

const ThemedProfileCard = ({
  lightColor,
  darkColor,
  text,
  icon,
}: ProfileCardProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "borderColor"
  );

  const iconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "profileIcon"
  );

  return (
    <ThemedPressable
      style={[
        { borderColor: borderColor, backgroundColor: backgroundColor },
        styles.cardContainer,
      ]}
    >
      <View style={styles.iconTextContainer}>
        {icon}
        <ThemedText type="profileText">{text}</ThemedText>
      </View>
      <Feather name="chevron-right" size={32} color={iconColor} />
    </ThemedPressable>
  );
};

export default ThemedProfileCard;

const styles = ScaledSheet.create({
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    gap: "4@vs",
    justifyContent: "space-between",
    paddingHorizontal: "16@s",
    paddingVertical: "12@vs",
    borderRadius: "10@s",
    borderWidth: "1@s",
  },
  iconTextContainer: {
    flexDirection: "row",
    gap: "12@s",
    alignItems: "center",
  },
});
