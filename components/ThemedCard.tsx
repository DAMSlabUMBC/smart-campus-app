import React from "react";
import { View } from "react-native";
import { Link, router } from "expo-router";
import { verticalScale, ScaledSheet } from "react-native-size-matters";

import Feather from "@expo/vector-icons/Feather";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedPressable } from "@/components/ThemedPressable";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ThemedCardProps {
  lightColor?: string;
  darkColor?: string;
  isNews?: boolean;
  title: string;
  date: string;
  summary: string | React.ReactNode;
  href?: string;
}

export default function ThemedCard({
  lightColor,
  darkColor,
  isNews = false,
  title,
  date,
  summary,
  href,
}: ThemedCardProps) {
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

  if (isNews) {
    return (
      <ThemedPressable
        style={[
          { borderColor: borderColor, backgroundColor: backgroundColor },
          styles.cardContainer,
        ]}
        onPress={() => {
          router.push(href as any);
        }}
      >
        <View style={{ width: "100%" }}>
          <ThemedText type="cardTitle">{title}</ThemedText>
          <ThemedText
            type="cardText"
            style={[{ color: detailColor }, styles.dateText]}
          >
            {date}
          </ThemedText>
        </View>
        <View style={{ gap: verticalScale(8) }}>
          <View style={{ gap: verticalScale(4) }}>
            {/* <ThemedText type="cardSubtitle">Summary</ThemedText> */}
            <ThemedText
              type="cardText"
              style={{ color: paragraphColor }}
              numberOfLines={2}
            >
              {summary}
            </ThemedText>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <ThemedText type="cardLink" style={{ color: detailColor }}>
              Click for more details
            </ThemedText>
            <Feather name="chevron-right" size={16} color={detailColor} />
          </View>
        </View>
      </ThemedPressable>
    );
  }

  return (
    <ThemedView style={[{ borderColor: borderColor }, styles.cardContainer]}>
      <View>
        <ThemedText type="cardTitle">{title}</ThemedText>
        <ThemedText
          type="cardText"
          style={[{ color: detailColor }, styles.dateText]}
        >
          {date}
        </ThemedText>
      </View>
      <View style={{ gap: verticalScale(8) }}>
        <View style={{ gap: verticalScale(4) }}>
          <ThemedText type="cardText" style={{ color: paragraphColor }}>
            {summary}
          </ThemedText>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = ScaledSheet.create({
  cardContainer: {
    flexDirection: "column",
    gap: "4@vs",
    paddingHorizontal: "16@s",
    paddingVertical: "12@vs",
    borderRadius: "10@s",
    borderWidth: "1@s",
  },
  dateText: {
    fontFamily: "Poppins-Medium",
    fontSize: "13@s",
  },
});
