import { View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { verticalScale, ScaledSheet } from "react-native-size-matters";
// import { Image } from "expo-image";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";

const mission = () => {
  return (
    <View style={styles.container}>
      <View style={{ gap: verticalScale(8) }}>
        <View
          style={{
            width: "100%",
            alignSelf: "flex-start",
          }}
        >
          <ThemedText type="title" style={styles.highlightText}>
            Concern
          </ThemedText>
        </View>
        <View style={{ gap: verticalScale(16) }}>
          <ThemedText>
            Our primary concern is ensuring{" "}
            <ThemedText style={styles.highlightText}>privacy</ThemedText> and{" "}
            <ThemedText style={styles.highlightText}>transparency</ThemedText> ,
            especially since our solution involves{" "}
            <ThemedText style={styles.highlightText}>
              deploying sensors
            </ThemedText>{" "}
            across the campus.
          </ThemedText>
          <ThemedText>
            We understand that this may{" "}
            <ThemedText style={styles.highlightText}>raise concerns</ThemedText>{" "}
            among UMBC students, as traditional monitoring methods, such as
            cameras, can{" "}
            <ThemedText style={styles.highlightText}>compromise</ThemedText>{" "}
            personal identities and data.
          </ThemedText>
          <ThemedText>
            To address these concerns, we have developed a{" "}
            <ThemedText style={styles.highlightText}>
              privacy-friendly
            </ThemedText>{" "}
            app designed to{" "}
            <ThemedText style={styles.highlightText}>
              inform and educate
            </ThemedText>{" "}
            students about smart campus services while safeguarding their
            privacy.
          </ThemedText>
          <ThemedPressable style={{ width: "60%", backgroundColor: "#FFC20E" }}>
            <ThemedText type="internalLink">Learn More</ThemedText>
          </ThemedPressable>
        </View>
      </View>
      <View>
        <Link href="/mission">
          <ThemedText type="link">Tap to Continue</ThemedText>
        </Link>
      </View>
    </View>
  );
};

export default mission;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  highlightText: {
    color: "#FFC20E",
  },
});
