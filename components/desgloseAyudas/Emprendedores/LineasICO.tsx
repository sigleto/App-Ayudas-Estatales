import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const LineasICO = () => (
  <ScrollView style={styles.container}>
    <View style={styles.card}>
      <Text style={styles.title}>Líneas ICO 2025</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>
          Financiación para inversiones, circulante, exportaciones y emprendimiento, dirigida a autónomos y empresas, con énfasis en la modernización, digitalización y sostenibilidad.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recursos Disponibles</Text>
        <Text style={styles.text}>• Total gestionado por ICO: Cerca de 40.000 millones de euros en líneas de financiación</Text>
        <Text style={styles.text}>• Línea ICO Empresas y Emprendedores: 8.150 millones de euros</Text>
        <Text style={styles.text}>• Sector turístico: Compartimento de 1.000 millones de euros</Text>
        <Text style={styles.text}>• Proyectos de digitalización e IA en universidades: 150 millones de euros</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Modalidades de Financiación</Text>
        <Text style={styles.text}>• Préstamos</Text>
        <Text style={styles.text}>• Leasing</Text>
        <Text style={styles.text}>• Renting</Text>
        <Text style={styles.text}>• Línea de crédito</Text>
        <Text style={styles.text}>• Financiación directa del ICO</Text>
        <Text style={styles.text}>• Adquisición de bonos</Text>
        <Text style={styles.text}>• Inversiones en capital riesgo a través de AXIS</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Plazos y Condiciones</Text>
        <Text style={styles.text}>• Plazo máximo de amortización: Hasta 20 años</Text>
        <Text style={styles.text}>• Compromiso de líneas: Antes del 31 de agosto de 2026</Text>
        <Text style={styles.text}>• Objetivo de sostenibilidad: 40% del volumen de nuevas operaciones bajo criterios de sostenibilidad (2022-2027)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
        <Text style={styles.text}>
          Las solicitudes se tramitan a través de las entidades bancarias colaboradoras. Consulta el listado de entidades en la web oficial del ICO.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Normativa</Text>
        <Text style={styles.text}>
          Regulación del Instituto de Crédito Oficial (ICO) y enmarcado en el Plan de Recuperación, Transformación y Resiliencia de España.
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
