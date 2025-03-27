import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Homescreen({ navigation }) {
  const [number1, setNumber1] = React.useState("");
  const [number2, setNumber2] = React.useState("");
  const [result, setResult] = React.useState(null);

  const getResult = (num1, num2) => {
    const parsed1 = parseFloat(num1);
    const parsed2 = parseFloat(num2);
    if (isNaN(parsed1) || isNaN(parsed2)) {
      return "Invalid input";
    }
    return parsed1 + parsed2;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter First Number</Text>
      <TextInput
        style={styles.input}
        value={number1}
        onChangeText={setNumber1}
        placeholder="0"
        keyboardType="numeric"
      />
      <Text style={styles.label}>Enter Second Number</Text>
      <TextInput
        style={styles.input}
        value={number2}
        onChangeText={setNumber2}
        placeholder="0"
        keyboardType="numeric"
      />
      <Button
        title="Calculate Sum"
        onPress={() => setResult(getResult(number1, number2))}
      />
      {result !== null && (
        <Text style={styles.resultText}>Result: {result}</Text>
      )}
      <Button
        title="Result Screen"
        onPress={() => {
          navigation.navigate("ResultScreen", { result: result });
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  resultText: {
    marginTop: 12,
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
