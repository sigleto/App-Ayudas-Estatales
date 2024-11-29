import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const KitDigital = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Kit Digital</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Subvenciones para la digitalización de pymes y autónomos, enfocadas en herramientas tecnológicas.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Empresas con menos de 50 empleados.{"\n"}
            - Cumplir con criterios de solvencia técnica y económica.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            La solicitud se realiza a través de la plataforma Acelera Pyme, presentando la documentación requerida.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Enmarcado en el Plan de Recuperación, Transformación y Resiliencia de España.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8', // Fondo suave
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
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#264653',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
});

export default KitDigital;
