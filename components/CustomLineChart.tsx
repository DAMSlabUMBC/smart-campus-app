import { useWindowDimensions, View } from "react-native";
import React from "react";
import {
  scale,
  verticalScale,
  ScaledSheet,
  moderateScale,
} from "react-native-size-matters";
import {
  LineChart as GiftedLineChart,
  yAxisSides,
} from "react-native-gifted-charts";

import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface LineChartProps {
  lightColor?: string; // Light theme color
  darkColor?: string; // Dark theme color
  numDataPoints: number; // Number of data points to generate
  queueLength: number; // Busyness level from 1-10
  maxLength: number; // Maximum length of the queue
}

const CustomLineChart = ({
  lightColor,
  darkColor,
  numDataPoints,
  queueLength,
  maxLength,
}: LineChartProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background2"
  ); // Background color for the chart

  const textColor = useThemeColor(
    { light: darkColor, dark: lightColor },
    "text"
  ); // Text color for the chart labels

  const textColor2 = useThemeColor(
    { light: darkColor, dark: lightColor },
    "text2"
  ); // Text color for the chart labels

  // Create a custom label component for the X axis
  const customLabel = (val: string) => {
    return (
      <View
        style={{
          width: scale(70),
          height: verticalScale(20),
        }}
      >
        <ThemedText style={styles.xLabels}>{val}</ThemedText>
      </View>
    );
  };

  // Generate random data for the line chart
  const lineData = Array.from({ length: numDataPoints }, (_, i) => {
    const newQueueLength = Math.floor(Math.random() * (maxLength + 1)); // Generate a random number between 0 and maxLength
    const hour = 6 + i; // Generate hours from 6am to 9pm
    const label =
      hour < 12 ? `${hour} am` : hour === 12 ? "12 pm" : `${hour - 12} pm`;
    return {
      value: Math.ceil((newQueueLength / maxLength) * 100), // Calculate busyness percentage from 0-100, // Random value between 0 and 100
      queue: newQueueLength, // Number of people in the queue
      time: label, // Label for the X axis
      labelComponent: i % 2 === 0 ? () => customLabel(label) : undefined, // Skip label for odd intervals
    };
  });

  // Add one more data point using the queueLength variable
  lineData.push({
    value: Math.ceil((queueLength / maxLength) * 100), // Calculate busyness percentage from 0-100
    queue: queueLength, // Number of people in the queue
    time: "Now", // Label for the current time
    labelComponent: () => customLabel("Now"), // Custom label for the new data point
  });

  return (
    <GiftedLineChart
      areaChart
      data={lineData}
      rotateLabel
      width={scale(290)}
      adjustToWidth
      hideDataPoints
      color="#0096FF"
      thickness={2}
      startFillColor="#0096FF"
      endFillColor="#0096FF"
      startOpacity={0.9}
      endOpacity={0.2}
      initialSpacing={0}
      noOfSections={5}
      scrollToEnd
      yAxisColor="white"
      yAxisThickness={0}
      rulesType="solid"
      rulesColor="gray"
      yAxisTextStyle={{ color: "gray" }}
      yAxisSide={yAxisSides.RIGHT}
      xAxisColor="lightgray"
      pointerConfig={{
        pointerStripHeight: verticalScale(160),
        pointerStripColor: "lightgray",
        pointerStripWidth: scale(2),
        pointerColor: "lightgray",
        radius: moderateScale(6),
        pointerLabelWidth: scale(100),
        pointerLabelHeight: verticalScale(90),
        activatePointersOnLongPress: true,
        autoAdjustPointerLabelPosition: true,
        pointerLabelComponent: (items: any) => {
          return (
            <View style={styles.pointerContainer}>
              <ThemedText
                style={[{ color: textColor }, styles.pointerAboveText]}
              >
                {items[0].time}
              </ThemedText>

              <View
                style={[
                  { backgroundColor: backgroundColor },
                  styles.pointerContentContainer,
                ]}
              >
                <ThemedText
                  style={[{ color: textColor2 }, styles.pointerContentText]}
                >
                  {items[0].queue} people
                </ThemedText>
              </View>
            </View>
          );
        },
      }}
    />
  );
};

export default CustomLineChart;

const styles = ScaledSheet.create({
  pointerContainer: {
    height: 90,
    width: 100,
    justifyContent: "center",
    marginTop: 20,
    marginLeft: -40,
  },
  pointerAboveText: {
    fontSize: 14,
    marginBottom: 6,
    textAlign: "center",
  },
  pointerContentContainer: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
  },
  pointerContentText: {
    fontWeight: "bold",
    textAlign: "center",
  },
  xLabels: {
    fontSize: "12@s",
    marginLeft: scale(8),
  },
});
