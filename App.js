import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TopNavigation from "./src/components/navigation/TopNavigation";
import { config } from "@gluestack-ui/config";
import { Box, GluestackUIProvider, Text } from "@gluestack-ui/themed";

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="#b0a1ed" />
          <Box>
            <Text style={styles.title}>Movies App</Text>
          </Box>
        </SafeAreaView>
        <TopNavigation />
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#8878C8",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 8,
  },
});
