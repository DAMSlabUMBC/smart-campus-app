import React, { useRef } from "react";
import { router, Redirect } from "expo-router";
import { View, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useAssets } from "expo-asset";
import { scale, ScaledSheet } from "react-native-size-matters";

import Feather from "@expo/vector-icons/Feather";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";
import { ExternalLink } from "@/components/ExternalLink";
import ThemedCard from "@/components/ThemedCard";
import ThemedLocationCard from "@/components/ThemedLocationCard";
import ThemedCameraButton from "@/components/ThemedCameraButton";

const home = () => {
  const [assets, error] = useAssets([
    require("../../../../assets/images/retrievers_logo.png"),
  ]);

  const map = useRef<MapView>(null);

  const region = {
    latitude: 39.25554982198129,
    longitude: -76.71108759491548,
    latitudeDelta: 0.009269018843035326,
    longitudeDelta: 0.011970351952598435,
  };

  const cards = [
    {
      coordinate: {
        latitude: 39.254278471070016,
        longitude: -76.71323412142037,
      },
      title: "Starbuck's",
      type: "Dining",
      description: "Food",
    },
    {
      coordinate: {
        latitude: 39.25354000895919,
        longitude: -76.70982040763015,
      },
      title: "Commons Garage",
      type: "Parking",
      description: "Parking",
    },
    {
      coordinate: {
        latitude: 39.256359590373265,
        longitude: -76.71156045469975,
      },
      title: "Einstein Bros Bagels",
      type: "Dining",
      description: "Food",
    },
  ];

  const onZoomInPress = () => {};

  const test = false;

  if (test) {
    return <Redirect href="/camera" />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Map section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <ThemedText type="defaultSemiBold">Sensor Map</ThemedText>
          <ThemedPressable style={styles.infoButton} onPress={onZoomInPress}>
            <Feather name="info" size={scale(24)} color="#0096FF" />
          </ThemedPressable>
        </View>
        <View>
          <ThemedCameraButton href="/camera" style={styles.cameraBtnPosition} />
          <MapView
            style={styles.mapContainer}
            ref={map}
            region={region}
            onRegionChangeComplete={(region) => {
              // console.log("Region changed:", region);
            }}
          >
            {cards.map((card, index) => {
              return (
                <Marker
                  key={index}
                  coordinate={card.coordinate}
                  title={card.title}
                  description={card.description}
                  onPress={() => {
                    router.push(`/sensors/${index}`);
                  }}
                />
              );
            })}
          </MapView>
        </View>
      </View>
      {/* Location section */}
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <ThemedText type="defaultSemiBold">Locations</ThemedText>
          <ThemedPressable style={styles.infoButton}>
            <Feather name="info" size={scale(24)} color="#0096FF" />
          </ThemedPressable>
        </View>
        <View style={styles.cardContainer}>
          {cards.map((card, index) => {
            return (
              <ThemedLocationCard
                key={index + 1}
                image={assets ? assets[0] : undefined}
                title={card.title}
                type={card.type}
                href={`/locations/${index}`}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <ThemedText type="defaultSemiBold">About</ThemedText>
          <ThemedPressable style={styles.infoButton}>
            <Feather name="info" size={scale(24)} color="#0096FF" />
          </ThemedPressable>
        </View>
        {/* About Section */}
        <View>
          <ThemedCard
            title="Smart Campus Team"
            date="Founded December 12, 2023"
            summary={
              <ThemedText type="cardText">
                Hello 👋,{"\n\n"}We are Smart Campus! A group of engineers and
                developers who have a vision toward enhancing campus life
                through innovation. Our focus is to provide UMBC students
                convenience without compromising privacy and serve transparency
                through our smart campus app.{"\n\n"}We’re also a part of the{" "}
                <ExternalLink href="https://damslabumbc.github.io/">
                  <ThemedText
                    type="cardText"
                    style={{
                      fontFamily: "Poppins-SemiBold",
                      textDecorationLine: "underline",
                      color: "#FFC20E",
                    }}
                  >
                    DAMS Research Group
                  </ThemedText>
                </ExternalLink>
                , consisting of faculty and students from the Departments of
                Computer Science and Electrical Engineering of UMBC, and
                developed our smart campus services in the DAMS lab.
                {"\n\n"}Let us know if you have any questions or problems{" "}
                <ThemedText
                  type="cardText"
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    color: "#FFC20E",
                  }}
                >
                  @[email]
                </ThemedText>
              </ThemedText>
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default home;

const styles = ScaledSheet.create({
  container: {
    gap: "16@vs",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: "40@vs",
  },
  mapContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: "10@s",
    borderColor: "transparent",
  },
  cardContainer: {
    gap: "8@vs",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainer: {
    width: "100%",
    gap: "8@vs",
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
    borderRadius: "5@s",
    backgroundColor: "transparent",
  },
  cameraBtnPosition: {
    position: "absolute",
    top: "16@vs",
    right: "16@s",
    zIndex: 1,
  },
});
