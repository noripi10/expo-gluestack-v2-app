import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Alert, KeyboardAvoidingView, Platform, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { Box } from "../components/ui/box";
import { Button, ButtonText } from "../components/ui/button";
import { Text } from "../components/ui/text";
import { Heading } from "../components/ui/heading";
import { Divider } from "../components/ui/divider";
import { HStack } from "../components/ui/hstack";
import { Input, InputField, InputIcon, InputSlot } from "../components/ui/input";
import { MailIcon } from "../components/ui/icon";
import { LinearGradient } from "../components/ui/linear-gradient";
import { Link } from "expo-router";

const PADDING_TOP = 48;

export default function Home() {
  const colorScheme = useColorScheme();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: colorScheme === "dark" ? "#000" : "#fff" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Box className="flex-1 p-4 items-center gap-2 bg-white dark:bg-black">
          <View style={{ paddingTop: PADDING_TOP }} />

          <Heading size="2xl">gluestack-ui</Heading>

          <HStack className="gap-2">
            <Link href="/modal" asChild>
              <Button size={"lg"} action={"primary"}>
                <ButtonText>Show Modal</ButtonText>
              </Button>
            </Link>

            <Divider orientation="vertical" />

            <Button
              size={"lg"}
              action={"negative"}
              onPress={() => {
                Alert.alert("On Press");
              }}
            >
              <ButtonText>Alert</ButtonText>
            </Button>
          </HStack>

          <Input
            variant="outline"
            size="lg"
            className="w-full rounded-full my-3 px-2"
            // style={{ borderWidth: 0.5, paddingHorizontal: 12 }}
          >
            <InputField placeholder="input field" />
            <InputSlot className="pr-3">
              <InputIcon as={MailIcon} color={colorScheme === "dark" ? "white" : "black"} />
            </InputSlot>
          </Input>

          <Pressable
            className="w-full"
            onPress={() => {
              Alert.alert("On Press");
            }}
          >
            <LinearGradient
              className="w-full rounded-full items-center justify-center py-3"
              colors={["#8637CF", "#0F55A1"]}
              start={[0, 1]}
              end={[1, 0]}
            >
              <Text>BUTTON</Text>
            </LinearGradient>
          </Pressable>
        </Box>
      </KeyboardAvoidingView>
      <Box className="absolute right-2 bottom-2">
        <Text>Hoge</Text>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});