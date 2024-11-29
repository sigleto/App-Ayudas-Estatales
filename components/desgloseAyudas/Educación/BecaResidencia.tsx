import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BecaResidencia: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca de Residencia</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayuda destinada a sufragar los gastos de residencia de estudiantes que cursen 
          estudios lejos de su domicilio familiar.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Estar matriculado en estudios postobligatorios o universitarios.{"\n"}
          - Residencia habitual alejada del centro de estudios.{"\n"}
          - No superar el umbral de renta familiar correspondiente.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Rellenar la solicitud en línea en la sede del Ministerio.{"\n"}
          2. Aportar un contrato de alquiler o certificado de residencia.{"\n"}
          3. Completar antes de la fecha límite.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Incluida en las disposiciones generales de las becas estatales, regulada 
          por la Orden EFP/XYZ/2024.
        </Text>
      </View>
    </ScrollView>
  );
};

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

export default BecaResidencia;