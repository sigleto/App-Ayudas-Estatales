import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const KitDigital = () => (
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
        <Text style={styles.text}>• Ser una pequeña empresa, microempresa o autónomo.</Text>
        <Text style={styles.text}>• Cumplir los límites financieros y efectivos que definen las categorías de empresas.</Text>
        <Text style={styles.text}>• Estar en situación de alta y tener la antigüedad mínima que se establece por convocatoria.</Text>
        <Text style={styles.text}>• No tener consideración de empresa en crisis.</Text>
        <Text style={styles.text}>• Estar al corriente de las obligaciones tributarias y frente a la Seguridad Social.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
        <Text style={styles.text}>
          La solicitud se realiza a través de la plataforma{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL('https://www.acelerapyme.gob.es/user/login')
            }
          >
            Acelera Pyme
          </Text>, presentando la documentación requerida. Aquí tienes una{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.acelerapyme.gob.es/sites/acelerapyme/files/2022-08/Kit_Digital_Gui%CC%81a_pymes.pdf'
              )
            }
          >
            guía rápida
          </Text>{' '}
          con todos los detalles.
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
  },
  card: {
    backgroundColor: '#f9f1b9',
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
    fontSize: 22,
    fontWeight: '600',
    color: '#1f5ef8',
    marginBottom: 8,
  },
  text: {
    fontSize: 20,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default KitDigital;
