
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrestamosICO() {
  return (
    <View style={styles.container}>
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
  );
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
    content: { fontSize: 16, lineHeight: 24, color: '#555' },
  });