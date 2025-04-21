import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, ScrollView } from "react-native";
import { useAssets } from "expo-asset";
import { Image } from "expo-image";
import { scale, ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "@/hooks/useThemeColor";

import Feather from "@expo/vector-icons/Feather";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";
import Divider from "@/components/Divider";

interface SensorProps {
  lightColor?: string;
  darkColor?: string;
  location: string;
}

let isSensorActive = false; // Simulate sensor activity status

const sensor = ({ lightColor, darkColor, location }: SensorProps) => {
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
      locationTitle: "Starbuck's",
      locationSubtitle: "UC Building",
      locationDate: "April 1, 2025",
      type: "dining",
    },
    {
      // locationImage: assets ? assets[1] : undefined,
      locationTitle: "Commons Garage",
      locationSubtitle: "Commons Building",
      locationDate: "April 10, 2025",
      type: "parking",
    },
    {
      // locationImage: assets ? assets[2] : undefined,
      locationTitle: "Eistein Bros Bagels",
      locationSubtitle: "AOK Library",
      locationDate: "April 2, 2025",
      type: "dining",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.textSpacing}>
        <View style={styles.content}>
          <Image
            source={
              sensorData[sensorId].type === "dining"
                ? assets
                  ? assets[0]
                  : undefined
                : assets
                  ? assets[2]
                  : undefined
            }
            style={styles.sensorImageContainer}
          />
          <View style={{ paddingVertical: 4, alignItems: "center" }}>
            <View style={styles.titleContainer}>
              <ThemedText type="locationTitle">
                {sensorData[sensorId].locationTitle}
              </ThemedText>
              <ThemedPressable style={styles.infoButton} onPress={() => {}}>
                <Feather name="info" size={scale(24)} color="#0096FF" />
              </ThemedPressable>
            </View>
            <ThemedText type="locationDate" style={{ color: detailColor }}>
              Updates {sensorData[sensorId].locationDate} •{" "}
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
        <ThemedText type="locationSubtitle2">What am I?</ThemedText>
        <Divider />
        <View style={styles.textSpacing}>
          <ThemedText type="locationText" style={{ color: paragraphColor }}>
            {sensorData[sensorId].type === "dining" && "I'm a LIDAR sensor!"}
            {sensorData[sensorId].type === "parking" && "I'm a video camera!"}
          </ThemedText>
        </View>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">What do I do?</ThemedText>
        <Divider />
        <View style={styles.textSpacing}>
          <ThemedText type="locationText" style={{ color: paragraphColor }}>
            {sensorData[sensorId].type === "dining" &&
              "I send out laser pulses to measure distances to nearby objects."}
            {sensorData[sensorId].type === "parking" &&
              "I look at parking spots to see if they’re free or taken."}
          </ThemedText>
        </View>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Why do I do it?</ThemedText>
        <Divider />
        <View style={styles.textSpacing}>
          <ThemedText type="locationText" style={{ color: paragraphColor }}>
            {sensorData[sensorId].type === "dining" &&
              "To help count how many people are in a queue—nothing more."}
            {sensorData[sensorId].type === "parking" &&
              "To help people find available parking faster and easier."}
          </ThemedText>
        </View>
      </View>
      <View style={styles.textSpacing}>
        <ThemedText type="locationSubtitle2">Should I be worried?</ThemedText>
        <Divider />
        <View style={styles.textSpacing}>
          <ThemedText type="locationText" style={{ color: paragraphColor }}>
            {sensorData[sensorId].type === "dining" &&
              "Nope! I don’t see faces or know who you are—just that something was there."}
            {sensorData[sensorId].type === "parking" &&
              "Don’t worry—I automatically blur faces and license plates before doing anything else."}
          </ThemedText>
        </View>
      </View>
    </ScrollView>
  );
};

export default sensor;

const styles = ScaledSheet.create({
  container: {
    gap: "16@vs",
    paddingBottom: "60@vs",
  },
  sensorImageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: "16@ms",
  },
  titleContainer: {
    flexDirection: "row",
    gap: "8@s",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    gap: "8@vs",
  },
  infoButton: {
    width: "24@s",
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5@s",
    backgroundColor: "transparent",
  },
  activeText: {
    color: isSensorActive ? "#FF4141" : "#5E6064",
  },
  textSpacing: {
    gap: "4@vs",
  },
});
