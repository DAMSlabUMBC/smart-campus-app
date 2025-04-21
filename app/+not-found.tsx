import React from "react";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { usePathname } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { s } from "react-native-size-matters";

export default function NotFoundScreen() {
  const pathname = usePathname();
  const debug = false;
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedText type="title">This screen doesn't exist.</ThemedText>
        <ThemedView style={styles.linkContainer}>
          {debug && (
            <ThemedText style={styles.textAlign}>
              Path name: {pathname}
            </ThemedText>
          )}
          <Link href="/" style={styles.textAlign}>
            <ThemedText type="link" style={styles.highlight}>
              Go to home screen!
            </ThemedText>
          </Link>
        </ThemedView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  linkContainer: {
    marginTop: 15,
    paddingVertical: 15,
  },
  textAlign: {
    textAlign: "center",
  },
  highlight: {
    color: "#FFC20E",
  },
});
