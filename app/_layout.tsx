import "@/global.css";

import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useColorScheme } from "react-native";

export default function MainLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <GluestackUIProvider mode={colorScheme === "dark" ? "dark" : "light"}>
          <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          </Stack>
        </GluestackUIProvider>
      </ThemeProvider>
    </>
  );
}
