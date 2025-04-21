import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import React from "react";

import { ThemedText } from "@/components/ThemedText";

const workInProgress = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Work in Progress</ThemedText>
      <ThemedText style={styles.text}>
        This feature is currently under development. Please check back later!
      </ThemedText>
    </View>
  );
};

export default workInProgress;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
