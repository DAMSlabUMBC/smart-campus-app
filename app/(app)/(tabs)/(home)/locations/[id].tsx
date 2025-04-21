import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import DonutChart from "@/components/DonutChart";
import CustomLineChart from "@/components/CustomLineChart";
import { ScaledSheet } from "react-native-size-matters";
import { chartDataList } from "@/constants/DataTypes";

import { ThemedText } from "@/components/ThemedText";
import Divider from "@/components/Divider";
import { useThemeColor } from "@/hooks/useThemeColor";

interface LocationsProps {
  lightColor?: string;
  darkColor?: string;
}

const locations = ({ lightColor, darkColor }: LocationsProps) => {
  const paragraphColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "paragraphText"
  );
  const backgroundDataColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "backgroundData"
  );

  const { id } = useLocalSearchParams();
  const locationId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id); // Parse the locations ID from the URL parameter

  // Dining variables
  const maxLength = 30; // Maximum length of the queue
  const estimateWait = 1; // Wait time per person in minutes

  const queue = Math.floor(Math.random() * 31); // Generate a random number between 0 and 30
  const waitTime = Math.ceil(queue * estimateWait); // Calculate wait time based on queue amount (5 minutes per person)
  const queuebusyness = Math.ceil((queue / maxLength) * 10); // Calculate queuebusyness level from 1-10 based on queue amount

  // Parking variables
  const freeParkingSpaces = 50; // Maximum number of parking spaces
  const takenParkingSpaces = Math.floor(
    Math.random() * (freeParkingSpaces + 1)
  ); // Maximum number of free parking spaces
  const parkingbusyness = Math.ceil(
    (takenParkingSpaces / freeParkingSpaces) * 10
  ); // Calculate busyness level from 1-10 based on queue amount

  const generateDiningQueueData = (queue: number) => [
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

  const generateParkingQueueData = (queue: number) => [
    {
      value: queue,
      color:
        queue <= freeParkingSpaces / 4
          ? "#a3ff00" // Green
          : queue <= freeParkingSpaces / 2
            ? "#fff400" // Yellow
            : queue <= (3 * freeParkingSpaces) / 4
              ? "#ffa700" // Orange
              : "#ff0000", // Red
      gradientCenterColor:
        queue <= freeParkingSpaces / 4
          ? "#a3ff00" // Green
          : queue <= freeParkingSpaces / 2
            ? "#fff400" // Yellow
            : queue <= (3 * freeParkingSpaces) / 4
              ? "#ffa700" // Orange
              : "#ff0000", // Red,
    },
    {
      value: freeParkingSpaces - queue,
      color: backgroundDataColor,
      gradientCenterColor: backgroundDataColor,
    },
  ];

  const starbuckTime = new Date(Date.now() - 5 * 60 * 1000);
  const eisteinTime = new Date(Date.now() - 7 * 60 * 1000);
  const commonsParkingTime = new Date(Date.now() - 5 * 60 * 1000);

  const cards: chartDataList = {
    items: [
      {
        title: "Starbuck's",
        type: "dining",
        date: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: starbuckTime,
        data: {
          queue: generateDiningQueueData(queue),
          busyness: queuebusyness,
        },
      },
      {
        title: "Commons Garage",
        type: "parking",
        date: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: commonsParkingTime,
        data: {
          queue: generateParkingQueueData(takenParkingSpaces),
          busyness: parkingbusyness,
        },
      },
      {
        title: "Eistein Bros Bagels",
        type: "dining",
        date: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: eisteinTime,
        data: {
          queue: generateDiningQueueData(queue),
          busyness: queuebusyness,
        },
      },
    ],
  };

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <ThemedText type="locationTitle">
          {cards.items[locationId]?.title}
        </ThemedText>
        <ThemedText type="locationDate" style={{ color: paragraphColor }}>
          {cards.items[locationId]?.date}{" "}
        </ThemedText>
      </View>
      {cards.items[locationId]?.type === "dining" ? (
        <View style={styles.textSpacing}>
          <ThemedText type="locationSubtitle2">Live Queue</ThemedText>
          <Divider />
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.donutChartContainer}>
              <DonutChart
                id={locationId}
                queueLength={
                  cards.items[locationId]?.type === "dining"
                    ? queue
                    : takenParkingSpaces
                }
                pieDataItem={cards}
              />
            </View>
            <ThemedText type="locationDate" style={{ color: paragraphColor }}>
              Updated{" "}
              {new Date().getMinutes() -
                cards.items[locationId]?.time.getMinutes() !==
              0
                ? `${
                    new Date().getMinutes() -
                    cards.items[locationId]?.time.getMinutes()
                  } minutes ago`
                : "now"}{" "}
            </ThemedText>
          </View>
        </View>
      ) : null}
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">
          {cards.items[locationId]?.type === "dining"
            ? "Wait Time"
            : "Available Parking"}
        </ThemedText>
        <Divider />
        <ThemedText
          type="locationText"
          style={[{ color: paragraphColor }, styles.waitTimeText]}
        >
          {cards.items[locationId]?.type === "dining"
            ? `${Math.floor(waitTime / 60)}h ${waitTime % 60}m`
            : `${freeParkingSpaces - takenParkingSpaces} spaces`}
        </ThemedText>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Busyness Levels</ThemedText>
        <Divider />
        <View style={styles.lineChartContainer}>
          <CustomLineChart
            numDataPoints={24}
            queueLength={
              cards.items[locationId]?.type === "dining"
                ? queue
                : takenParkingSpaces
            }
            maxLength={
              cards.items[locationId]?.type === "dining"
                ? maxLength
                : freeParkingSpaces
            }
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
    borderRadius: "10@ms",
  },
  lineChartContainer: {
    width: "100%",
    marginVertical: "12@vs",
    justifyContent: "flex-start",
    borderRadius: "10@ms",
    overflow: "visible",
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
