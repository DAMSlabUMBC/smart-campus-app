import { View } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { verticalScale, ScaledSheet } from "react-native-size-matters";

import { ThemedText } from "@/components/ThemedText";

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
            Mission
          </ThemedText>
        </View>
        <View style={{ gap: verticalScale(16) }}>
          <ThemedText>
            The{" "}
            <ThemedText style={styles.highlightText}>"Smart Campus"</ThemedText>{" "}
            project is designed to enhance the UMBC student experience by
            offering{" "}
            <ThemedText style={styles.highlightText}>
              innovative solutions
            </ThemedText>{" "}
            through our mobile app.
          </ThemedText>
          <ThemedText>
            Its primary goal is to provide{" "}
            <ThemedText style={styles.highlightText}>
              real-time updates
            </ThemedText>{" "}
            on smart devices and essential{" "}
            <ThemedText style={styles.highlightText}>
              campus services
            </ThemedText>{" "}
            , including dining, parking, and much more.
          </ThemedText>
          <ThemedText>
            Our team is committed to delivering the{" "}
            <ThemedText style={styles.highlightText}>
              best possible user experience
            </ThemedText>{" "}
            , and we are continuously working to improve the app.
          </ThemedText>
          <ThemedText>
            We’re <ThemedText style={styles.highlightText}>excited</ThemedText>{" "}
            to have you join us on this journey!
          </ThemedText>
        </View>
      </View>
      <View>
        <Link href="/auth/sign-in">
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
