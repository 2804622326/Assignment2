import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  const [inputText, setInputText] = React.useState('');
  const [manipulatedText, setManipulatedText] = React.useState(null);

  const handleChangeText = (text) => {
    console.log('User input changed:', text);
    setInputText(text);
  };

  const handleStringManipulation = () => {

    const reversed = inputText.split('').reverse().join('');
    setManipulatedText(reversed);
  };


  const goToResultScreen = () => {
    handleStringManipulation();
    navigation.navigate('Result', { finalString: manipulatedText });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter a Word or Phrase</Text>

      <TextInput
        style={styles.input}
        placeholder="Type something..."
        keyboardType="default"
        value={inputText}
        onChangeText={handleChangeText}
      />

      <Button title="Manipulate String" onPress={handleStringManipulation} />

      {manipulatedText !== null && (
        <Text style={styles.result}>Result: {manipulatedText}</Text>
      )}

      <View style={{ marginTop: 10 }}>
        <Button title="Go to Result Screen" onPress={goToResultScreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 18, marginBottom: 10, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 4,
    fontSize: 16,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});