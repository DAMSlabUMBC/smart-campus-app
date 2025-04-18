import React from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { useThemeColor } from "@/hooks/useThemeColor";

interface DividerProps {
  lightColor?: string;
  darkColor?: string;
}

const Divider = ({ lightColor, darkColor }: DividerProps) => {
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "divider"
  );

  return <View style={[{ backgroundColor: color }, styles.divider]} />;
};

export default Divider;

const styles = ScaledSheet.create({
  divider: {
    width: "100%",
    height: "1@vs",
    borderRadius: "2@ms",
  },
});
