import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const BecaApoyoEducativo: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca de Apoyo Educativo</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Diseñada para estudiantes con necesidades educativas especiales derivadas 
          de discapacidad, trastornos graves de conducta o altas capacidades.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Acreditar una discapacidad igual o superior al 25%.{"\n"}
          - Estar matriculado en centros educativos específicos o integradores.{"\n"}
          - No superar los umbrales de renta familiar.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Accede al portal del Ministerio de Educación y rellena el formulario online.{"\n"}
          2. Proporciona certificados médicos o informes psicopedagógicos.{"\n"}
          3. Presenta la solicitud antes de la fecha límite.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Basada en la Orden EDU/947/2024 y las actualizaciones anuales del Ministerio.
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

export default BecaApoyoEducativo;