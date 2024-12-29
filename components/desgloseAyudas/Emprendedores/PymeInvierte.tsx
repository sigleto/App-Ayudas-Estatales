import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const PymeInvierte = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Programa Pyme Invierte 2025</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Apoyo integral a la inversión e implantación en el exterior de las pymes españolas, facilitando asesoramiento y acceso a financiación.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Líneas de Apoyo</Text>
          <Text style={styles.text}>
            1. Pyme Invierte Inversiones Productivas{"\n"}
            2. Pyme Invierte Implantaciones Comerciales
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Beneficiarios</Text>
          <Text style={styles.text}>
            - Pymes españolas con proyectos de inversión productiva en el exterior (necesidades de financiación a más de 3 años){"\n"}
            - Pymes españolas con proyectos de implantación comercial en el exterior
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            Enviar la solicitud y el plan de negocios a asesoramiento.financiero@icex.es. ICEX y OFECOMES evaluarán la aceptación del asesoramiento según disponibilidad de recursos.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Financiación</Text>
          <Text style={styles.text}>
            COFIDES proporciona acceso a la financiación para los proyectos aprobados.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Más Información</Text>
          <Text style={styles.text}>
            Para detalles adicionales, visite la{' '}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  'https://www.icex.es/es/todos-nuestros-servicios/financiacion-para-la-internacionalizacion/programa-pyme-invierte'
                )
              }
            >
              web oficial del ICEX
            </Text>.
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
