import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import DonutChart from "@/components/DonutChart";
import CustomLineChart from "@/components/CustomLineChart";
import { ScaledSheet, verticalScale, scale } from "react-native-size-matters";
import { chartDataList } from "@/constants/DataTypes";

import { ThemedText } from "@/components/ThemedText";
import Divider from "@/components/Divider";
import { useThemeColor } from "@/hooks/useThemeColor";

interface LocationsProps {
  lightColor?: string;
  darkColor?: string;
}

const locations = ({ lightColor, darkColor }: LocationsProps) => {
  const detailColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "detailText"
  );
  const paragraphColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "paragraphText"
  );
  const backgroundDataColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "backgroundData"
  );

  const { id } = useLocalSearchParams();
  const newsId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id); // Parse the locations ID from the URL parameter

  const maxLength = 30; // Maximum length of the queue
  const estimateWait = 1; // Wait time per person in minutes

  const queue = Math.floor(Math.random() * 51); // Generate a random number between 0 and 50
  const waitTime = Math.ceil(queue * estimateWait); // Calculate wait time based on queue amount (5 minutes per person)
  const busyness = Math.ceil((queue / maxLength) * 10); // Calculate busyness level from 1-10 based on queue amount

  const flag = true;

  const generateQueueData = (queue: number) => [
    {
      value: queue,
      color:
        queue <= maxLength / 4
          ? "#a3ff00" // Green
          : queue <= maxLength / 2
            ? "#fff400" // Yellow
            : queue <= (3 * maxLength) / 4
              ? "#ffa700" // Orange
              : "#ff0000", // Red
      gradientCenterColor:
        queue <= maxLength / 4
          ? "#a3ff00" // Green
          : queue <= maxLength / 2
            ? "#fff400" // Yellow
            : queue <= (3 * maxLength) / 4
              ? "#ffa700" // Orange
              : "#ff0000", // Red,
    },
    {
      value: maxLength - queue,
      color: backgroundDataColor,
      gradientCenterColor: backgroundDataColor,
    },
  ];

  const cards: chartDataList = {
    items: [
      {
        title: "Starbuck's",
        date: "January 21, 2025",
        data: {
          queue: generateQueueData(queue),
          waitTime,
          busyness,
        },
      },
      {
        title: "Commons Garage",
        date: "January 17, 2025",
        data: {
          queue: generateQueueData(queue),
          waitTime,
          busyness,
        },
      },
    ],
  };

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ gap: 4 }}>
        <ThemedText type="locationTitle">
          {cards.items[newsId]?.title}
        </ThemedText>
        <ThemedText type="locationDate" style={{ color: detailColor }}>
          Updated {cards.items[newsId]?.date}
        </ThemedText>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Live Queue</ThemedText>
        <Divider />
        <ThemedText type="locationText" style={{ color: paragraphColor }}>
          <View style={styles.donutChartContainer}>
            <DonutChart id={newsId} queueLength={queue} pieDataItem={cards} />
          </View>
        </ThemedText>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Wait Time</ThemedText>
        <Divider />
        <ThemedText
          type="locationText"
          style={[{ color: paragraphColor }, styles.waitTimeText]}
        >
          {Math.floor(waitTime / 60)}h {waitTime % 60}m
        </ThemedText>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Busyness Levels</ThemedText>
        <Divider />
        <View style={styles.lineChartContainer}>
          <CustomLineChart
            numDataPoints={12}
            queueLength={queue}
            maxLength={maxLength}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default locations;

const styles = ScaledSheet.create({
  content: {
    gap: "24@vs",
    paddingBottom: "60@vs",
  },
  donutChartContainer: {
    width: "100%",
    height: "160@vs",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#282828",
    borderRadius: "10@ms",
  },
  lineChartContainer: {
    width: "100%",
    marginVertical: "12@vs",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#282828",
    borderRadius: "10@ms",
  },
  lineChartLabelText: {},
  waitTimeText: {
    fontSize: "24@s",
  },
  dateTextSizing: {
    fontSize: "18@s",
  },
  textSpacing: {
    gap: "4@vs",
  },
});
