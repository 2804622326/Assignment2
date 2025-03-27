// SettingsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>Adjust your app preferences here.</Text>
      <View style={{ marginTop: 10 }} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default SettingsScreen;
