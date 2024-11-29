import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const EnisaEmprendedores = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Programa Enisa para Emprendedores</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Financiación mediante préstamos participativos para startups y pymes con modelos de negocio innovadores.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Empresas con un máximo de 24 meses de antigüedad.{"\n"}
            - Proyectos viables con modelos de negocio innovadores.{"\n"}
            - Aportación mínima del 50% del capital solicitado por los socios.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            La solicitud se realiza a través de la web de ENISA, adjuntando el plan de negocio y la documentación financiera.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Regulado bajo las bases del Ministerio de Industria, Comercio y Turismo.
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

export default EnisaEmprendedores;

