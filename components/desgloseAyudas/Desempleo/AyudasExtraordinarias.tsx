import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const AyudasExtraordinarias = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ayudas Extraordinarias</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Las ayudas extraordinarias están dirigidas a personas en situación de vulnerabilidad económica y social que no cumplen los requisitos para acceder a prestaciones contributivas o subsidios ordinarios.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Estar en situación de especial necesidad económica.{"\n"}
            - No superar el límite de ingresos establecido por la administración.{"\n"}
            - Ser residente legal en España.{"\n"}
            - Cumplir condiciones específicas según la ayuda solicitada (ejemplo: familias numerosas, víctimas de violencia de género, etc.).
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de solicitud</Text>
          <Text style={styles.text}>
            - Acudir a los servicios sociales de tu comunidad autónoma o ayuntamiento.{"\n"}
            - Rellenar el formulario correspondiente y aportar la documentación requerida.{"\n"}
            - Seguir el procedimiento establecido según la ayuda específica.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            - Ley 39/2006 de Promoción de la Autonomía Personal y Atención a las Personas en Situación de Dependencia.{"\n"}
            - Regulaciones específicas por comunidad autónoma.
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

export default AyudasExtraordinarias;
