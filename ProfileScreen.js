// ProfileScreen.js (Exercise 2)
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function ProfileScreen({ route, navigation }) {
  // Extract the passed userName (default to 'Guest' if not provided)
  const { userName = 'Guest' } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.greeting}>Hello, {userName}!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  greeting: { fontSize: 20, marginBottom: 20 },
});

export default ProfileScreen;
