import { Link, RelativePathString, ExternalPathString } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform } from "react-native";
import * as Haptics from "expo-haptics";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href as RelativePathString | ExternalPathString}
      onPress={async (event) => {
        if (Platform.OS !== "web") {
          // Trigger haptic feedback
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);

          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
