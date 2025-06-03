import { useForm } from "@tanstack/react-form";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  organizationCode: z.string().min(1, "Organization code is required"),
});

export default function Login() {
  // TODO: fix types
  const form = useForm<z.infer<typeof schema>>({
    validators: {
      onChange: schema,
    },
  });

  return (
    <View className="bg-white">
      <form.Field name="email">
        {(field) => (
          <>
            <Text>Email:</Text>
            <TextInput
              value={field.state.value}
              onChangeText={field.handleChange}
              placeholder="Enter your email"
            />
            {!field.state.meta.isValid && (
              <Text>{field.state.meta.errors.join(", ")}</Text>
            )}
          </>
        )}
      </form.Field>

      <form.Field name="password">
        {(field) => (
          <>
            <Text>Password:</Text>
            <TextInput
              value={field.state.value}
              onChangeText={field.handleChange}
              placeholder="Enter your password"
              secureTextEntry
            />
            {!field.state.meta.isValid && (
              <Text>{field.state.meta.errors.join(", ")}</Text>
            )}
          </>
        )}
      </form.Field>

      <form.Field name="organizationCode">
        {(field) => (
          <>
            <Text>Organization Code:</Text>
            <TextInput
              value={field.state.value}
              onChangeText={field.handleChange}
              placeholder="Enter your organization code"
              autoCapitalize="none"
            />
            {!field.state.meta.isValid && (
              <Text>{field.state.meta.errors.join(", ")}</Text>
            )}
          </>
        )}
      </form.Field>

      <Pressable onPress={() => form.handleSubmit()} disabled={isLoading}>
        <Text className="login-button">
          {isLoading ? "Creating Account..." : "Create Account"}
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/login")}>
        <Text className="login-button">
          Already have an account? Login
        </Text>
      </Pressable>
    </View>
  );
}
