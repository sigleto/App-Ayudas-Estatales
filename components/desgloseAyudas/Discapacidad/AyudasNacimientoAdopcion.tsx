import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AyudasNacimientoAdopcion() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ayudas por Nacimiento o Adopción</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Prestación económica de 1.000 € dirigida a familias con hijos nacidos o adoptados que tengan alguna discapacidad.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - El hijo o hija debe tener reconocido un grado de discapacidad igual o superior al 33%.{"\n"}
          - Los ingresos familiares deben estar por debajo del umbral establecido.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se presenta en la Seguridad Social, junto con el certificado de discapacidad del menor y la declaración de ingresos familiares.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por el artículo 22 del Real Decreto Legislativo 1/2013.
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
