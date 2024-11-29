import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

export default function AyudasAlAlquiler() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
      <Text style={styles.title}>Ayudas al Alquiler</Text>

      <Text style={styles.subtitle}>Descripción</Text>
      <Text style={styles.content}>
        Ayudas económicas para personas con ingresos limitados, destinadas a sufragar hasta el 50% del coste mensual del alquiler.
      </Text>

      <Text style={styles.subtitle}>Requisitos</Text>
      <Text style={styles.content}>
        - No superar el límite de ingresos establecido.{"\n"}
        - Contrato de alquiler vigente y estar al corriente de pagos.{"\n"}
        - Vivienda habitual y permanente.
      </Text>

      <Text style={styles.subtitle}>Proceso de Solicitud</Text>
      <Text style={styles.content}>
        Presentar la solicitud en las oficinas autonómicas con documentos de identificación, contrato de alquiler y justificantes de pago.
      </Text>

      <Text style={styles.subtitle}>Normativa</Text>
      <Text style={styles.content}>
        Plan Estatal de Vivienda 2022-2025.
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
