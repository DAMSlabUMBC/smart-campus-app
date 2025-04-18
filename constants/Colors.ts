/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import profile from "@/app/(app)/(tabs)/(profile)/profile";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#383838", //"#11181C",
    text2: "#fff", //"#11181C",
    accentText: "#5E6064",
    detailText: "#A6A6A6",
    paragraphText: "#666666",
    linkText: "#3A82F7",
    borderColor: "#C2C2C2",
    background: "#fff",
    background2: "#575757",
    divider: "#C2C2C2",
    innerCircle: "#F5F5F5",
    backgroundData: "#CCCCCC",
    pointerLabel: "#C2C2C2",
    tint: tintColorLight,
    icon: "#687076",
    profileIcon: "#666666",
    button: "#FFC20E",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    text2: "#fff",
    accentText: "#5E6064",
    detailText: "#A6A6A6",
    paragraphText: "#D9D9D9",
    linkText: "#FFC20E",
    borderColor: "#575757",
    background: "#282828",
    background2: "#282828",
    divider: "#575757",
    innerCircle: "#282828",
    backgroundData: "#575757",
    pointerLabel: "#282828",
    tint: tintColorDark,
    profileIcon: "#fff",
    icon: "#3A82F7",
    button: "#FFC20E",
    tabIconDefault: "#3A82F7",
    tabIconSelected: tintColorDark,
  },
};
