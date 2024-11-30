import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function BonoJovenAlquiler() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bono Joven Alquiler</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayuda destinada a facilitar el acceso a la vivienda para jóvenes, cubriendo una parte del alquiler de la vivienda durante un período determinado.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Ser menor de 35 años.{"\n"}
          - Tener un contrato de alquiler en vigor.{"\n"}
          - Cumplir con los límites de ingresos establecidos.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          Se debe presentar la solicitud en el portal habilitado por el Ministerio de Transportes, Movilidad y Agenda Urbana, aportando la documentación requerida.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          El bono joven está regulado por el Real Decreto 42/2021, de 15 de febrero, de ayudas al alquiler.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
  },
  card: {
    backgroundColor: '#ffffff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2a9d8f',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#264653',
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
});
