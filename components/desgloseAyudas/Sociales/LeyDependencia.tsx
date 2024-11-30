import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function LeyDependencia() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ley de Dependencia</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ley que garantiza la atención a personas en situación de dependencia, asegurando el acceso a servicios y prestaciones de cuidado personal.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Estar en situación de dependencia.{"\n"}
          - Ser residente en España.{"\n"}
          - Cumplir con el baremo de dependencia establecido por la ley.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud debe realizarse ante los servicios sociales de la comunidad autónoma correspondiente, donde se evaluará la situación de dependencia.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las Personas en Situación de Dependencia.
        </Text>
      </View>
    </ScrollView>
  );
}

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
