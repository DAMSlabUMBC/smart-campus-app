import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { PieChart } from "react-native-gifted-charts";
import { chartDataList } from "@/constants/DataTypes";

import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

interface DonutChartProps {
  lightColor?: string;
  darkColor?: string;
  id: number;
  queueLength: number;
  pieDataItem: chartDataList;
}

const DonutChart = ({
  lightColor,
  darkColor,
  id,
  queueLength,
  pieDataItem,
}: DonutChartProps) => {
  const innerCircleColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "innerCircle"
  );

  return (
    <PieChart
      data={pieDataItem.items[id]?.data.queue ?? []}
      donut
      showGradient
      sectionAutoFocus
      radius={90}
      innerRadius={60}
      innerCircleColor={innerCircleColor}
      isAnimated={true}
      animationDuration={800}
      centerLabelComponent={() => {
        return (
          <View style={styles.centerLabelContainer}>
            <ThemedText type="locationSubtitle2">{queueLength}</ThemedText>
            <ThemedText type="locationDate">
              {(() => {
                const busynessLevel = pieDataItem.items[id]?.data.busyness ?? 0;
                if (busynessLevel <= 3) {
                  return "Low";
                } else if (busynessLevel <= 6) {
                  return "Moderate";
                } else if (busynessLevel <= 8) {
                  return "High";
                } else {
                  return "Very High";
                }
              })()}
            </ThemedText>
          </View>
        );
      }}
    />
  );
};

export default DonutChart;

const styles = ScaledSheet.create({
  centerLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
