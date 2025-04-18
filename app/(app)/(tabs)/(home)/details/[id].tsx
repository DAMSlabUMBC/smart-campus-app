import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { verticalScale, ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "@/hooks/useThemeColor";

import { ThemedText } from "@/components/ThemedText";
import Divider from "@/components/Divider";

interface SensorProps {
  lightColor?: string;
  darkColor?: string;
}

let isSensorActive = false; // Simulate sensor activity status

const sensor = ({ lightColor, darkColor }: SensorProps) => {
  // Load assets
  const [assets, error] = useAssets([
    require("../../../../../assets/images/loads_camera.jpeg"),
    require("../../../../../assets/images/camera_example.webp"),
    require("../../../../../assets/images/camera_example_2.webp"),
    require("../../../../../assets/images/camera_example_3.jpg"),
  ]);

  const detailColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "detailText"
  );

  const paragraphColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "paragraphText"
  );

  const accentColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "accentText"
  );

  const { id } = useLocalSearchParams(); // Get the sensor ID from the URL parameters

  const sensorId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id); // Parse the sensor ID from the URL parameter

  // Store sensor data in an array of objects
  const sensorData = [
    {
      // locationImage: assets ? assets[0] : undefined,
      locationTitle: "Starbucks | UC Building",
      locationDate: "Update April 1, 2025 •",
    },
    {
      // locationImage: assets ? assets[1] : undefined,
      locationTitle: "Parking | Commons Garage",
      locationDate: "Update April 3, 2025 •",
    },
    {
      // locationImage: assets ? assets[2] : undefined,
      locationTitle: "Eistein Bros Bagels | AOK Library",
      locationDate: "Update April 2, 2025 •",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.textSpacing}>
        <ThemedText type="locationTitle">Sensor Location</ThemedText>
        <View style={styles.content}>
          <Image
            source={assets ? assets[0] : undefined}
            style={styles.sensorImageContainer}
          />
          <View style={{ alignItems: "center" }}>
            <ThemedText type="locationSubtitle">
              {sensorData[sensorId].locationTitle}
            </ThemedText>
            <ThemedText type="locationDate" style={{ color: detailColor }}>
              {sensorData[sensorId].locationDate}{" "}
              {isSensorActive ? (
                <ThemedText type="locationDate" style={styles.activeText}>
                  Currently Live
                </ThemedText>
              ) : (
                <ThemedText type="locationDate" style={{ color: accentColor }}>
                  Inactive
                </ThemedText>
              )}
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Data Collection</ThemedText>
        <Divider />
        <View style={styles.textSpacing}>
          <ThemedText type="locationText" style={{ color: paragraphColor }}>
            Smart Campus employs LIDAR sensors, a non-invasive technology that
            uses light to collect data. These sensors measure queue lengths and
            wait times in real time.{"\n\n"}
            This method allows us to collect all data anonymously, with no
            personally identifiable information attached.{"\n\n"}
            These benefits support user privacy, improve operational efficiency,
            and enhance the user experience through:
          </ThemedText>
          <View
            style={[styles.textSpacing, { paddingLeft: verticalScale(16) }]}
          >
            <ThemedText type="locationText" style={{ color: paragraphColor }}>
              {"\u2022"} Real-time wait queue updates
            </ThemedText>
            <ThemedText type="locationText" style={{ color: paragraphColor }}>
              {"\u2022"} Location-specific data (e.g. Starbucks, Commons Garage,
              etc.)
            </ThemedText>
          </View>
        </View>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Data Usage</ThemedText>
        <Divider />
        <View style={styles.textSpacing}>
          <ThemedText type="locationText" style={{ color: paragraphColor }}>
            Smart Campus leverages sensor data using the HDBSCAN algorithm,
            which stores meaningful data clusters for further analysis—enabling
            effective real-time data grouping and providing valuable insights.
            {"\n\n"}
            This data is then used in the front-end app to provide users with:
          </ThemedText>
          <View
            style={[styles.textSpacing, { paddingLeft: verticalScale(16) }]}
          >
            <ThemedText type="locationText" style={{ color: paragraphColor }}>
              {"\u2022"} Live queue updates
            </ThemedText>
            <ThemedText type="locationText" style={{ color: paragraphColor }}>
              {"\u2022"} Wait time estimations
            </ThemedText>
            <ThemedText type="locationText" style={{ color: paragraphColor }}>
              {"\u2022"} Busyness indicators
            </ThemedText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default sensor;

const styles = ScaledSheet.create({
  container: {
    gap: "16@vs",
    paddingBottom: "40@vs",
  },
  sensorImageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: "16@ms",
  },
  content: {
    gap: "8",
  },
  activeText: {
    color: isSensorActive ? "#FF4141" : "#5E6064",
  },
  textSpacing: {
    gap: "4@vs",
  },
});
