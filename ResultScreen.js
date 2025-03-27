import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function ResultScreen({ route, navigation }) {
  const { result = "Result" } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.label}> Result!! </Text>
      <Text style={styles.resultText}> {result} </Text>
      <Button
        title="Go Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },

  resultText: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
