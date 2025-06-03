import { router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <View className="flex-1 items-center justify-center p-4">
        <View className="w-full max-w-sm space-y-4">
          <Pressable
            className="rounded-lg bg-blue-500 p-3"
            onPress={() => router.push("/login")}
          >
            <Text className="text-center font-medium text-white">Login</Text>
          </Pressable>
          
          <Pressable
            className="rounded-lg border border-blue-500 p-3"
            onPress={() => router.push("/register")}
          >
            <Text className="text-center font-medium text-blue-500">
              Create Account
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
