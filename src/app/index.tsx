import { Stack } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <View>
        <Text className="text-lg text-red-600">Home Screen</Text>
      </View>
    </>
  );
}
