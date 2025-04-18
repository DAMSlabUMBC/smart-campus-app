import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { router } from "expo-router";
import { ScaledSheet } from "react-native-size-matters";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedLocationCardProps {
  lightColor?: string;
  darkColor?: string;
  image?: any;
  title: string;
  date: string;
  href?: string;
}

export default function ThemedLocationCard({
  lightColor,
  darkColor,
  image,
  title,
  date,
  href,
}: ThemedLocationCardProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  const detailColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "detailText"
  );
  const paragraphColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "paragraphText"
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
      style={[{ backgroundColor, borderColor }, styles.locationContainer]}
    >
      <Image
        source={image ?? undefined}
        contentFit="contain"
        style={styles.imageContainer}
      />
      <View style={{ flexDirection: "column" }}>
        <ThemedText type="cardTitle">{title}</ThemedText>
        <ThemedText type="cardText">{date}</ThemedText>
      </View>
    </ThemedPressable>
  );
}

const styles = ScaledSheet.create({
  locationContainer: {
    width: "100%",
    gap: "16@s",
    paddingHorizontal: "16@s",
    paddingVertical: "12@vs",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "10@s",
    borderWidth: "1@s",
  },
  imageContainer: {
    width: "46@ms",
    height: undefined,
    aspectRatio: 1,
    borderRadius: "16@ms",
  },
  dateText: {
    fontFamily: "Poppins-Medium",
    fontSize: "13@s",
  },
});
