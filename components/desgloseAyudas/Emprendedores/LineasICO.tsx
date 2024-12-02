import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const LineasICO = () => (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Líneas ICO</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>
          Financiación para inversiones, circulante, exportaciones y emprendimiento, dirigida a autónomos y empresas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conceptos Financiables</Text>
        <Text style={styles.text}>• Necesidades de liquidez, tales como gastos corrientes, nóminas, pagos a proveedores, compra de mercancía, etc.</Text>
        <Text style={styles.text}>• Necesidades tecnológicas.</Text>
        <Text style={styles.text}>• Adquisición de activos fijos nuevos o de segunda mano.</Text>
        <Text style={styles.text}>• Vehículos turismos e industriales.</Text>
        <Text style={styles.text}>• Adecuación y reforma de instalaciones.</Text>
        <Text style={styles.text}>• Adquisición de empresas.</Text>
        <Text style={styles.text}>
          • Rehabilitación o reforma de edificios, elementos comunes y viviendas (IVA o impuestos análogos incluidos) en el caso de comunidades de propietarios, agrupaciones de comunidades de propietarios y particulares.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Importe y Modalidad</Text>
        <Text style={styles.text}>• Importe máximo por cliente: El importe máximo por cliente y año es de 12,5 millones de euros, en una o varias operaciones.</Text>
        <Text style={styles.text}>• Modalidad de la operación: La financiación podrá formalizarse bajo la modalidad de préstamo, leasing, renting o línea de crédito.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
        <Text style={styles.text}>
          Las solicitudes se tramitan a través de las entidades bancarias colaboradoras. Puedes descargar{' '}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                'https://www.ico.es/ico-empresas-y-emprendedores/donde-solicitar'
              )
            }
          >
            AQUÍ
          </Text>{' '}
          el listado de entidades.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Normativa</Text>
        <Text style={styles.text}>
          Regulación del Instituto de Crédito Oficial (ICO).
        </Text>
      </View>
    </View>
  </ScrollView>
);

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

export default LineasICO;
