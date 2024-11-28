import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Aval20PorCiento() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aval del 20% de la Hipoteca</Text>

      <Text style={styles.subtitle}>Descripción</Text>
      <Text style={styles.content}>
        Programa que facilita el acceso a hipotecas sin necesidad de cubrir el 20% inicial, especialmente para jóvenes y familias numerosas.
      </Text>

      <Text style={styles.subtitle}>Requisitos</Text>
      <Text style={styles.content}>
        - Ser menor de 35 años o familia numerosa.{"\n"}
        - No poseer otra vivienda.{"\n"}
        - Cumplir con las condiciones del banco colaborador.
      </Text>

      <Text style={styles.subtitle}>Proceso de Solicitud</Text>
      <Text style={styles.content}>
        Gestionar a través de las entidades bancarias participantes, presentando la documentación requerida.
      </Text>

      <Text style={styles.subtitle}>Normativa</Text>
      <Text style={styles.content}>
        Programa de Garantía de Vivienda del Gobierno de España.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
    content: { fontSize: 16, lineHeight: 24, color: '#555' },
  });