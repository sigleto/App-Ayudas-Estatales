import React from 'react';
import { ScrollView, View, Text, StyleSheet,Linking } from 'react-native';

const PymeInvierte = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Programa Pyme Invierte</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Apoyo para la internacionalización de pymes mediante inversión productiva en el exterior.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Proyectos con necesidades de financiación superiores a 3 años.{"\n"}
            - Empresas registradas en España.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            Las solicitudes se presentan en la web del<Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  'https://www.icex.es/es/todos-nuestros-servicios/financiacion-para-la-internacionalizacion/programa-pyme-invierte'
                )
              }
            > ICEX
            </Text>, acompañadas del plan de internacionalización.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Gestionado por el Instituto Español de Comercio Exterior (ICEX).
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

export default PymeInvierte;
