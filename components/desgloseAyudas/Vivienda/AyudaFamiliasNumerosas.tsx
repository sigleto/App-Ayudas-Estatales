import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AyudasFamiliasNumerosas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayudas para Familias Numerosas</Text>

      <Text style={styles.subtitle}>Descripción</Text>
      <Text style={styles.content}>
        Bonificaciones fiscales y descuentos en la adquisición de viviendas de segunda mano y en préstamos hipotecarios destinados a familias numerosas.
      </Text>

      <Text style={styles.subtitle}>Requisitos</Text>
      <Text style={styles.content}>
        - Tener el título oficial de familia numerosa.{"\n"}
        - Usar la vivienda como residencia habitual.{"\n"}
        - Cumplir los requisitos de ingresos según la comunidad autónoma.
      </Text>

      <Text style={styles.subtitle}>Proceso de Solicitud</Text>
      <Text style={styles.content}>
        Solicitar en el registro de vivienda correspondiente con el certificado de familia numerosa y otros documentos requeridos.
      </Text>

      <Text style={styles.subtitle}>Normativa</Text>
      <Text style={styles.content}>
        Ley 40/2003, de Protección a las Familias Numerosas.
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