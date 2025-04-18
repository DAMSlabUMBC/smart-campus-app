import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useEffect } from "react";
import { View, AppState } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScaledSheet } from "react-native-size-matters";
import { Linking } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Feather from "@expo/vector-icons/Feather";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedPressable } from "@/components/ThemedPressable";

const buttonSize = 32;

const camera = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const isFocused = useIsFocused(); // Check if the screen is focused

  const qrLock = useRef(false);
  const appState = useRef(AppState.currentState);
  const cameraRef = useRef<CameraView>(null); // Reference to the camera component

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      // Handle app state changes (e.g., background, inactive, active)
      if (
        // App is in background or inactive and is coming to foreground
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        qrLock.current = false; // Reset the lock when the app comes to the foreground
      }
      appState.current = nextAppState; // Update the app state reference
    });

    return () => {
      subscription.remove(); // Cleanup the event listener on unmount
    };
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <ThemedView style={styles.container}>
        <View style={styles.content}>
          <Feather name="camera-off" size={128} color="#687076" />
          <ThemedText type="link" style={styles.message}>
            We need your permission to show the camera
          </ThemedText>
        </View>
        <View style={styles.scanButtonContainer}>
          <ThemedPressable onPress={requestPermission}>
            <ThemedText type="internalLink">Allow Camera Access</ThemedText>
          </ThemedPressable>
        </View>
      </ThemedView>
    );
  }

  return (
    isFocused && (
      <SafeAreaView style={styles.cameraContainer} edges={[]}>
        <CameraView
          ref={cameraRef} // Attach the camera reference to the CameraView
          style={styles.camera}
          facing="back"
          active={isFocused} // Activate the camera only when the screen is focused
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
          onBarcodeScanned={({ data }: { data: string }) => {
            if (data && !qrLock.current) {
              qrLock.current = true; // Lock the QR code scanner to prevent multiple scans
              // Delay the scan to allow for a single scan
              setTimeout(async () => {
                // Open the URL in the default browser
                await Linking.openURL(data).catch((err) =>
                  console.error("An error occurred", err)
                );
              }, 500);
            }
          }}
        >
          {/* <View style={styles.scanButtonContainer}>
          <ThemedPressable style={{ opacity: !qrLock.current ? 1 : 0.5 }} disabled={scanned}>
            <ThemedText type="internalLink">Open QR Code</ThemedText>
          </ThemedPressable>
        </View> */}
        </CameraView>
      </SafeAreaView>
    )
  );
};

export default camera;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginVertical: "40@s",
    marginHorizontal: "12@s",
    backgroundColor: "transparent",
    paddingBottom: "40@vs",
  },
  cameraContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: "64@vs",
    gap: "16@vs",
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: "20@s",
    color: "#687076",
    textAlign: "center",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: "32@s",
    borderRadius: "16@s",
    overflow: "hidden",
  },
  scanButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  cameraButton: {
    width: buttonSize + 12,
    height: undefined,
    aspectRatio: 1,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
