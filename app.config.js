export default {
  expo: {
    name: "Smart Campus App",
    slug: "smart-campus-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "demo",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.umbc.smartcampusapp",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
      googleServicesFile:
        process.env.GOOGLE_SERVICES_PLIST ??
        "C:/google-services/GoogleService-Info.plist",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive_icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.umbc.smartcampusapp",
      googleServicesFile:
        process.env.GOOGLE_SERVICES_JSON ??
        "C:/google-services/google-services.json",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    auth: {
      redirect: "demo://home",
    },
    plugins: [
      "expo-router",
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-firebase/crashlytics",
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "static",
          },
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash_icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "expo-asset",
        {
          assets: [
            "./assets/images/splash_icon.png",
            "./assets/images/icon.png",
            "./assets/images/adaptive_icon.png",
            "./assets/images/retrievers_logo.png",
            "./assets/images/umbc_bg.jpg",
            "./assets/images/google_icon.png",
            "./assets/images/info_icon.png",
            "./assets/images/starbucks_logo.webp",
            "./assets/images/camera_example.webp",
            "./assets/images/camera_example_2.webp",
            "./assets/images/camera_example_3.jpg",
          ],
        },
      ],
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission:
            "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true,
        },
      ],
      "expo-secure-store",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: process.env.EAS_PROJECT_ID ?? "",
      },
    },
    updates: {
      url: process.env.EXPO_UPDATE_URL,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
