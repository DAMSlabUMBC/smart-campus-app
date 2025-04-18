import { Text, type TextProps } from "react-native";
import { moderateScale, ScaledSheet } from "react-native-size-matters";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  darkColor?: string;
  lightColor?: string;
  type?:
    | "default"
    | "defaultSemiBold"
    | "defaultSemiBold2"
    | "internalLink"
    | "link"
    | "subtitle"
    | "subtitle2"
    | "title"
    | "locationTitle"
    | "locationSubtitle"
    | "locationSubtitle2"
    | "locationDate"
    | "locationText"
    | "cardTitle"
    | "cardSubtitle"
    | "cardText"
    | "cardLink"
    | "newsTitle"
    | "newsSubtitle"
    | "newsDate"
    | "newsText"
    | "newsLink"
    | "profileTitle"
    | "profileName"
    | "profileSubtitle"
    | "profileDate"
    | "profileText";
};

export function ThemedText({
  darkColor,
  lightColor,
  style,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "link" ? styles.link : undefined,
        type === "internalLink" ? styles.internalLink : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "title" ? styles.title : undefined,
        type === "locationTitle" ? styles.locationTitle : undefined,
        type === "locationSubtitle" ? styles.locationSubtitle : undefined,
        type === "locationSubtitle2" ? styles.locationSubtitle2 : undefined,
        type === "locationDate" ? styles.locationDate : undefined,
        type === "locationText" ? styles.locationText : undefined,
        type === "cardTitle" ? styles.cardTitle : undefined,
        type === "cardSubtitle" ? styles.cardSubtitle : undefined,
        type === "cardText" ? styles.cardText : undefined,
        type === "cardLink" ? styles.cardLink : undefined,
        type === "newsTitle" ? styles.newsTitle : undefined,
        type === "newsSubtitle" ? styles.newsSubtitle : undefined,
        type === "newsDate" ? styles.newsDate : undefined,
        type === "newsText" ? styles.newsText : undefined,
        type === "newsLink" ? styles.newsLink : undefined,
        type === "profileTitle" ? styles.profileTitle : undefined,
        type === "profileName" ? styles.profileName : undefined,
        type === "profileSubtitle" ? styles.profileSubtitle : undefined,
        type === "profileDate" ? styles.profileDate : undefined,
        type === "profileText" ? styles.profileText : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

// color: "#FFC20E"
const styles = ScaledSheet.create({
  default: {
    fontSize: "16@s",
    fontFamily: "Poppins-Medium",
    lineHeight: moderateScale(24),
  },
  defaultSemiBold: {
    fontSize: "24@s",
    fontFamily: "Poppins-SemiBoldItalic",
  },
  title: {
    fontSize: "48@s",
    fontFamily: "Poppins-BoldItalic",
    lineHeight: moderateScale(40),
    paddingTop: moderateScale(40) - moderateScale(40) * 0.5,
  },
  subtitle: {
    fontSize: "32@s",
    fontFamily: "Poppins-BoldItalic",
  },
  link: {
    fontSize: "16@s",
    fontFamily: "Poppins-Medium",
  },
  internalLink: {
    fontSize: "16@s",
    fontFamily: "Poppins-SemiBold",
    color: "#000",
    pointerEvents: "none",
  },
  locationTitle: {
    fontSize: "32@s",
    fontFamily: "Poppins-SemiBoldItalic",
  },
  locationSubtitle: {
    fontSize: "19@s",
    fontFamily: "Poppins-SemiBold",
  },
  locationSubtitle2: {
    fontSize: "24@s",
    fontFamily: "Poppins-SemiBold",
  },
  locationDate: {
    fontSize: "16@s",
    fontFamily: "Poppins-Medium",
  },
  locationText: {
    fontSize: "15@s",
    fontFamily: "Poppins-Medium",
  },
  cardTitle: {
    fontSize: "18@s",
    fontFamily: "Poppins-SemiBold",
  },
  cardSubtitle: {
    fontSize: "14@s",
    fontFamily: "Poppins-SemiBold",
  },
  cardText: {
    fontSize: "14@s",
    fontFamily: "Poppins-Regular",
  },
  cardLink: {
    fontSize: "12@s",
    fontFamily: "Poppins-Medium",
    textDecorationLine: "underline",
    // textAlign: "center",
  },
  newsTitle: {
    fontSize: "28@s",
    fontFamily: "Poppins-BoldItalic",
  },
  newsSubtitle: {
    fontSize: "24@s",
    fontFamily: "Poppins-SemiBoldItalic",
  },
  newsDate: {
    fontSize: "16@s",
    fontFamily: "Poppins-Medium",
  },
  newsText: {
    fontSize: "16@s",
    fontFamily: "Poppins-Regular",
  },
  newsLink: {
    fontSize: "14@s",
    fontFamily: "Poppins-Regular",
    textDecorationLine: "underline",
  },
  profileTitle: {
    fontSize: "22@s",
    fontFamily: "Poppins-Medium",
  },
  profileName: {
    fontSize: "20@s",
    fontFamily: "Poppins-SemiBold",
  },
  profileSubtitle: {
    fontSize: "18@s",
    fontFamily: "Poppins-SemiBold",
  },
  profileDate: {
    fontSize: "14@s",
    fontFamily: "Poppins-Medium",
  },
  profileText: {
    fontSize: "18@s",
    fontFamily: "Poppins-Regular",
  },
});
