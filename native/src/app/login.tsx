import { useForm } from "@tanstack/react-form";
import { Text, TextInput, View } from "react-native";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
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
            />
            {!field.state.meta.isValid && (
              <Text>{field.state.meta.errors.join(", ")}</Text>
            )}
          </>
        )}
      </form.Field>
    </View>
  );
}
