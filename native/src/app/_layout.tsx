import "~/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="light" />
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
      </Stack>
    </>
  );
}
