import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { ThemedText } from "@/components/ThemedText";
import Divider from "@/components/Divider";
import { useThemeColor } from "@/hooks/useThemeColor";

interface PostProps {
  lightColor?: string;
  darkColor?: string;
}

const cards = [
  {
    title: "Starbuck's Sensor Deployment",
    date: "January 21, 2025",
    summary:
      "The SMART Campus team has recently deployed a new sensor into the Starbuck’s in UC Building. The sensor was place above the front cashier counter with a displayable QR code.",
  },
  {
    title: "Update 1.0.0",
    date: "January 17, 2025",
    summary:
      "Added new parking & profile features! User’s can now view real-time  updates on available parking spaces in the parking tab. Additionally, live notifications can now be turned on within profile settings.",
  },
  {
    title: "Starbuck's Sensor Deployment",
    date: "January 21, 2025",
    summary:
      "The SMART Campus team has recently deployed a new sensor into the Starbuck’s in UC Building. The sensor was place above the front cashier counter with a displayable QR code.",
  },
  {
    title: "Update 1.0.0",
    date: "January 17, 2025",
    summary:
      "Added new parking & profile features! User’s can now view real-time  updates on available parking spaces in the parking tab. Additionally, live notifications can now be turned on within profile settings.",
  },
  {
    title: "Update 1.0.0",
    date: "January 17, 2025",
    summary:
      "Added new parking & profile features! User’s can now view real-time  updates on available parking spaces in the parking tab. Additionally, live notifications can now be turned on within profile settings.",
  },
  {
    title: "Starbuck's Sensor Deployment",
    date: "January 21, 2025",
    summary:
      "The SMART Campus team has recently deployed a new sensor into the Starbuck’s in UC Building. The sensor was place above the front cashier counter with a displayable QR code.",
  },
];

const posts = ({ lightColor, darkColor }: PostProps) => {
  const detailColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "detailText"
  );
  const paragraphColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "paragraphText"
  );

  const { id } = useLocalSearchParams();
  const newsId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id); // Parse the post ID from the URL parameter

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.bigTextSpacing}>
        <View>
          <ThemedText type="locationTitle">
            {cards.at(newsId)?.title}
          </ThemedText>
          <ThemedText type="locationDate" style={{ color: detailColor }}>
            Updated {cards.at(newsId)?.date}
          </ThemedText>
        </View>
        <View style={styles.textSpacing}>
          <ThemedText type="locationSubtitle2">Summary</ThemedText>
          <Divider />
          <ThemedText type="locationText">
            {cards.at(newsId)?.summary}
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
};

export default posts;

const styles = ScaledSheet.create({
  content: {
    gap: "16@vs",
  },
  dateTextSizing: {
    fontSize: "18@s",
  },
  bigTextSpacing: {
    gap: "12@vs",
  },
  textSpacing: {
    gap: "6@vs",
  },
});
