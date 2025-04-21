import { View } from "react-native";
import { Link, Redirect } from "expo-router";
import React from "react";
import { scale, ScaledSheet } from "react-native-size-matters";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";

const index = () => {
  const [assets, error] = useAssets([
    require("../../assets/images/retrievers_logo.png"),
  ]);

  const test = false;

  if (test) {
    return <Redirect href="/home" />;
  }

  return (
    <Link href="/concern">
      <View style={styles.container}>
        <View
          style={{
            width: "100%",
            alignSelf: "flex-start",
          }}
        >
          <ThemedText type="title">
            Welcome {"\n"}
            <ThemedText
              type="title"
              style={[styles.subtitleSizing, { color: "#FFC20E" }]}
            >
              Retriever
            </ThemedText>
          </ThemedText>
        </View>
        <View style={styles.contentContainer}>
          <Image
            source={assets ? assets[0] : undefined}
            contentFit="contain"
            style={styles.imageContainer}
          />
          <View>
            <ThemedText
              type="subtitle"
              style={{ color: "#FFC20E", textAlign: "center" }}
            >
              Smart Campus
            </ThemedText>
            <ThemedText style={[styles.text, { paddingHorizontal: scale(20) }]}>
              Here to provide better services to our fellow retrievers
            </ThemedText>
          </View>
        </View>
        <View>
          <ThemedText type="link">Tap to Continue</ThemedText>
        </View>
      </View>
    </Link>
  );
};

export default index;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "40@vs",
  },
  imageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    paddingBottom: "32@vs",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  subtitleText: {
    color: "#FFC20E",
    textAlign: "center",
  },
  subtitleSizing: {
    fontSize: "40@s",
  },
});
