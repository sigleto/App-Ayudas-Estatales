import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const PrestacionHijoDiscapacidad = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Prestación Económica por Hijo a Cargo con Discapacidad</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Ayuda destinada a familias con hijos menores de 18 años o mayores con un grado de discapacidad igual o
            superior al 33 %. Se concede como prestación económica mensual.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Tener un hijo con discapacidad reconocida (mínimo 33 %).{"\n"}
            - Residir legalmente en España.{"\n"}
            - Cumplir con los límites de ingresos establecidos por la Seguridad Social para acceder a la ayuda.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            1. Dirígete a la{" "}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.seg-social.es')}>
              <Text style={styles.link}>Seguridad Social</Text>
            </TouchableOpacity>{" "}
            y descarga el formulario oficial.{"\n"}
            2. Adjunta los documentos requeridos: certificado de discapacidad, libro de familia y documentación
            económica.{"\n"}
            3. Presenta la solicitud en las oficinas de la Seguridad Social o a través de su portal online.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Esta prestación se regula por el Real Decreto Legislativo 8/2015, de 30 de octubre, que aprueba el texto
            refundido de la Ley General de la Seguridad Social.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f7',
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
    color: '#1d3557',
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#457b9d',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default PrestacionHijoDiscapacidad;
