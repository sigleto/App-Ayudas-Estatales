import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const KitDigital = () => (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Kit Digital 2025</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>
          Subvenciones para la digitalización de pymes, autónomos y medianas empresas, enfocadas en herramientas tecnológicas avanzadas, incluyendo soluciones de Inteligencia Artificial.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Segmentos y Ayudas</Text>
        <Text style={styles.text}>• Segmento I (10-49 empleados): Hasta 12.000€</Text>
        <Text style={styles.text}>• Segmento II (3-9 empleados): Hasta 6.000€</Text>
        <Text style={styles.text}>• Segmento III (0-2 empleados): Hasta 2.000€</Text>
        <Text style={styles.text}>• Segmento IV (50-99 empleados): Hasta 25.000€</Text>
        <Text style={styles.text}>• Segmento V (100-249 empleados): Hasta 29.000€</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos Principales</Text>
        <Text style={styles.text}>• Ser pyme, micropyme o autónomo</Text>
        <Text style={styles.text}>• Cumplir los límites financieros y efectivos de cada categoría</Text>
        <Text style={styles.text}>• Antigüedad mínima de 6 meses</Text>
        <Text style={styles.text}>• No tener consideración de empresa en crisis</Text>
        <Text style={styles.text}>• Estar al corriente de obligaciones tributarias y con la Seguridad Social</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plazos</Text>
        <Text style={styles.text}>• Segmento III: Hasta el 31 de octubre de 2025</Text>
        <Text style={styles.text}>• Segmentos I y II: Hasta el 31 de diciembre de 2024</Text>
        <Text style={styles.text}>• Segmentos IV y V: Hasta el 30 de junio de 2025</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
        <Text style={styles.text}>
          La solicitud se realiza a través de la plataforma{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.acelerapyme.gob.es/')}
          >
            Acelera Pyme
          </Text>
          . Se requiere registro previo y presentación de la documentación necesaria.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Novedades</Text>
        <Text style={styles.text}>• Inclusión de soluciones de Inteligencia Artificial</Text>
        <Text style={styles.text}>• Posibilidad de sustituir soluciones existentes por otras más avanzadas</Text>
        <Text style={styles.text}>• Ampliación a medianas empresas (Segmentos IV y V)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Normativa</Text>
        <Text style={styles.text}>
          Enmarcado en el Plan de Recuperación, Transformación y Resiliencia de España, financiado por los fondos Next Generation EU.
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
