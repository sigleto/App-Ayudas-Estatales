import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PensionNoContributiva() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Pensión no contributiva de invalidez</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Prestación económica dirigida a personas con discapacidad igual o superior al 65% que carecen de ingresos suficientes.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Edad: entre 18 y 64 años.{"\n"}
          - Residencia legal en España durante al menos 5 años.{"\n"}
          - Ingresos familiares por debajo de los límites establecidos.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud se realiza en las oficinas del IMSERSO o de los servicios sociales de cada comunidad autónoma. Se debe presentar documentación médica y económica.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulada por el Real Decreto Legislativo 1/2013, de 29 de noviembre.
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
