import React from "react";
import { View, ScrollView } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";

import Feather from "@expo/vector-icons/Feather";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";
import ThemedCard from "@/components/ThemedCard";

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

const news = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.sectionHeader}>
        <ThemedText type="defaultSemiBold">Latest News</ThemedText>
        <ThemedPressable style={styles.infoButton}>
          <Feather name="info" size={scale(24)} color="#0096FF" />
        </ThemedPressable>
      </View>
      <View style={{ gap: 8 }}>
        {cards.map((card, index) => (
          <ThemedCard
            key={index + 1}
            isNews={true}
            title={card.title}
            date={card.date}
            summary={card.summary}
            href={`/posts/${index}`}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default news;

const styles = ScaledSheet.create({
  container: {
    gap: "16@vs",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingBottom: "40@vs",
  },
  cardContainer: {
    gap: "8@vs",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    gap: "8@s",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  infoButton: {
    width: "24@s",
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "transparent",
  },
});
