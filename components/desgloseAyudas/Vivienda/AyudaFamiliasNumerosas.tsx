import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

export default function AyudasFamiliasNumerosas() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
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
