import "~/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export { ErrorBoundary } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <StatusBar backgroundColor="light" />
      <Stack />
    </>
  );
}
