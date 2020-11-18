import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";

// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Container style={styles.container}>
        <RootNavigator />
      </Container>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#fff",
  },
});
