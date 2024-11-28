import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FamiliasNumerosas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apoyo a familias numerosas</Text>
      <Text style={styles.content}>
        Aquí puedes agregar información detallada sobre los subsidios por desempleo, los requisitos y cómo solicitarlos.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
