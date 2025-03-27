// WelcomeScreen.js (Exercise 2)
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function WelcomeScreen({ navigation }) {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button
        title="Go to Profile"
        onPress={() => {
          navigation.navigate('Profile', { userName: name });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default WelcomeScreen;
