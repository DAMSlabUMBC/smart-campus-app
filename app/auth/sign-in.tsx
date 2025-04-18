import React from "react";
import { Link } from "expo-router";
import { View } from "react-native";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";
import { verticalScale, ScaledSheet } from "react-native-size-matters";
import { router } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";

const signIn = () => {
  // Load assets
  const [assets, error] = useAssets([
    require("../../assets/images/retrievers_logo.png"),
    require("../../assets/images/google_icon.png"),
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignSelf: "flex-start",
        }}
      >
        <ThemedText type="title">
          Join us {"\n"}
          <ThemedText
            type="title"
            style={[styles.subtitleSizing, styles.highlightText]}
          >
            @Smart Campus
          </ThemedText>
        </ThemedText>
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={assets ? assets[0] : undefined}
          contentFit="contain"
          style={styles.imageContainer}
        />
        <View style={styles.textButtonContainer}>
          <ThemedText style={styles.text}>
            "Make your time better with{" "}
            <ThemedText
              style={[styles.highlightText, styles.highlightTextSizing]}
            >
              less
            </ThemedText>{" "}
            effort!"
          </ThemedText>
          <ThemedPressable
            style={styles.googleButtonContainer}
            onPress={() => {
              router.push("/home"); // Redirect to sign up page
            }}
          >
            <View style={styles.googleButtonContent}>
              <Image
                source={assets ? assets[1] : undefined}
                contentFit="contain"
                style={{
                  width: undefined,
                  height: "100%",
                  aspectRatio: 1,
                }}
              />
              <ThemedText type="internalLink" style={styles.signInLink}>
                Sign in with Google
              </ThemedText>
            </View>
          </ThemedPressable>
        </View>
      </View>
      <View>
        <ThemedText type="link">
          By signing up, you agree to our{" "}
          <Link href="/auth/sign-in">
            <ThemedText type="link" style={styles.link}>
              Terms of Use
            </ThemedText>{" "}
          </Link>
          and{" "}
          <Link href="/auth/sign-in">
            <ThemedText type="link" style={styles.link}>
              Privacy Policy
            </ThemedText>{" "}
          </Link>
          .
        </ThemedText>
      </View>
    </View>
  );
};

export default signIn;

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
  textButtonContainer: {
    gap: "16@s",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    paddingBottom: "32@vs",
  },
  googleButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "75%",
    paddingHorizontal: "16@s",
    marginTop: verticalScale(4),
    backgroundColor: "#FFF",
  },
  googleButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: "12@s",
    height: "24@vs",
  },
  subtitleSizing: {
    fontSize: "32@s",
  },
  signInLink: {
    textAlign: "center",
    fontSize: "16@s",
  },
  link: {
    color: "#FFC20E",
    textDecorationLine: "underline",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: "20@s",
  },
  highlightText: {
    color: "#FFC20E",
  },
  highlightTextSizing: {
    fontSize: "20@s",
  },
});
