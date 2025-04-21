import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";
import { ScaledSheet } from "react-native-size-matters";

import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

import { ThemedText } from "@/components/ThemedText";
import ThemedProfileCard from "@/components/ThemedProfileCard";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

interface ProfileProps {
  lightColor?: string;
  darkColor?: string;
}

const profile = ({ lightColor, darkColor }: ProfileProps) => {
  const [assets, error] = useAssets([
    require("../../../../assets/images/retrievers_logo.png"),
  ]);

  const profileIconColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "profileIcon"
  );

  const size = 32;

  return (
    <View>
      <View style={styles.profileInfoContainer}>
        <Image
          source={assets ? assets[0] : undefined}
          contentFit="contain"
          style={styles.imageContainer}
        />
        <View style={styles.profileTextContainer}>
          <View style={styles.profileTitleContainer}>
            <ThemedText type="profileTitle" style={styles.highlightText}>
              Retriever
            </ThemedText>
            <Ionicons name="paw" size={24} color="#FFC20E" />
          </View>
          <ThemedText type="profileName">John Doe</ThemedText>
          <ThemedText type="profileDate">Joined April 17, 2025</ThemedText>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <ThemedProfileCard
          text="Notifications"
          icon={<Feather name="bell" size={size} color={profileIconColor} />}
          onPress={() => router.push("/workInProgress")}
        />
        <ThemedProfileCard
          text="Privacy Policy"
          icon={<Feather name="shield" size={size} color={profileIconColor} />}
          onPress={() => router.push("/workInProgress")}
        />
        <ThemedProfileCard
          text="Support"
          icon={<Feather name="info" size={size} color={profileIconColor} />}
          onPress={() => router.push("/workInProgress")}
        />
        <ThemedProfileCard
          text="About Developers"
          icon={<Feather name="user" size={size} color={profileIconColor} />}
          onPress={() => router.push("/workInProgress")}
        />
        <ThemedProfileCard
          text="Log out"
          icon={<Feather name="log-out" size={size} color={profileIconColor} />}
          onPress={() => router.push("/workInProgress")}
        />
      </View>
    </View>
  );
};

export default profile;

const styles = ScaledSheet.create({
  profileInfoContainer: {
    flexDirection: "row",
    gap: "16@s",
    marginVertical: "16@vs",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileTitleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "8@s",
  },
  imageContainer: {
    width: "112@s",
    height: undefined,
    aspectRatio: 1,
    paddingBottom: "32@vs",
  },
  cardContainer: {
    gap: "12@vs",
    justifyContent: "center",
    alignItems: "center",
  },
  highlightText: {
    color: "#FFC20E",
  },
});
