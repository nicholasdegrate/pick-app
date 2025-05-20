import { router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <View>
        <Pressable onPress={() => router.push("/login")}>
          <Text>Login</Text>
        </Pressable>
        <Text className="text-lg text-red-600">Home Screen</Text>
      </View>
    </>
  );
}
