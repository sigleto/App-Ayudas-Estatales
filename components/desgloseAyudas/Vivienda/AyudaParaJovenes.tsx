import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AyudasParaJovenes() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ayudas para Jóvenes</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayudas para jóvenes menores de 35 años que desean adquirir una vivienda habitual y permanente en municipios con menos de 10,000 habitantes. Esta ayuda puede cubrir hasta el 20% del precio de la vivienda con un máximo de 10,800 €.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Ser menor de 35 años.{"\n"}
          - No tener propiedades en España.{"\n"}
          - Ingresos anuales no superiores a tres veces el IPREM.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          Las solicitudes deben gestionarse en las oficinas de vivienda de cada comunidad autónoma, adjuntando documentación personal, fiscal y de la vivienda.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Plan Estatal de Vivienda 2022-2025 (BOE-A-2021-19809).
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
