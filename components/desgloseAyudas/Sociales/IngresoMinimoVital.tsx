import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function IngresoMinimoVital() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ingreso Mínimo Vital (IMV)</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Prestación dirigida a prevenir la pobreza y exclusión social. Incluye un incremento del 22% para personas con discapacidad igual o superior al 65%.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Edad mínima de 23 años (o 18 años en determinados casos).{"\n"}
          - Ingresos insuficientes y situación de vulnerabilidad económica.{"\n"}
          - Residencia legal en España durante al menos 1 año.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se realiza en la Seguridad Social mediante su plataforma online o en oficinas físicas. Se debe presentar documentación de ingresos y discapacidad.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por el Real Decreto-ley 20/2020, de 29 de mayo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8', // Fondo suave y amigable
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

