
import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

export default function PrestamosICO() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>Préstamos ICO para Vivienda</Text>

      <Text style={styles.subtitle}>Descripción</Text>
      <Text style={styles.content}>
        Financiación específica para la adquisición de vivienda, con condiciones preferenciales, destinada a jóvenes y familias numerosas.
      </Text>

      <Text style={styles.subtitle}>Requisitos</Text>
      <Text style={styles.content}>
        - Ser mayor de edad y residente en España.{"\n"}
        - Justificar el destino de los fondos para vivienda.{"\n"}
        - Cumplir con las condiciones del banco intermediario.
      </Text>

      <Text style={styles.subtitle}>Proceso de Solicitud</Text>
      <Text style={styles.content}>
        Solicitar a través de las entidades bancarias colaboradoras, presentando identificación, justificantes de ingresos y del proyecto.
      </Text>

      <Text style={styles.subtitle}>Normativa</Text>
      <Text style={styles.content}>
        Convenios anuales del Instituto de Crédito Oficial (ICO).
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
