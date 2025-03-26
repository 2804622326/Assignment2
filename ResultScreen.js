import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ResultScreen({ route, navigation }) {
  // 从上一个页面获取字符串
  const { finalString } = route.params || { finalString: "" };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Result Screen</Text>
      <Text style={styles.result}>
        The manipulated string is: {finalString}
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    marginBottom: 20,
  },
});
