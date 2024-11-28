import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AyudasAlAlquiler() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
    content: { fontSize: 16, lineHeight: 24, color: '#555' },
  });