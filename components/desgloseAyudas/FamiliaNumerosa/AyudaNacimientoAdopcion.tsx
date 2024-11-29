import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

const AyudaNacimientoAdopcion = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ayuda por Nacimiento o Adopción</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Esta ayuda está destinada a apoyar económicamente a las familias que han tenido un hijo o han adoptado uno
            recientemente. Se ofrece como deducción fiscal o abono anticipado.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Ser padre o madre de un recién nacido o haber adoptado un menor.{"\n"}
            - Estar dado de alta en la Seguridad Social o mutualidad equivalente.{"\n"}
            - En caso de desempleo, estar recibiendo prestación por desempleo.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            1. Accede al portal de la{" "}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.agenciatributaria.es')}>
              <Text style={styles.link}>Agencia Tributaria</Text>
            </TouchableOpacity>{" "}
            o solicita la ayuda a través de tu empresa si eliges el abono anticipado.{"\n"}
            2. Presenta los documentos que acrediten tu situación (certificado de nacimiento o adopción,
            documentación laboral).{"\n"}
            3. Completa el formulario correspondiente.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Esta prestación está regulada por la Ley del Impuesto sobre la Renta de las Personas Físicas (IRPF). La
            normativa específica puede variar según actualizaciones legislativas.
          </Text>
        </View>
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
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default AyudaNacimientoAdopcion;
