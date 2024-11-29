import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SubsidiosPorDesempleo = () => {
  return (
    <ScrollView style={styles.container}>
         <View style={styles.card}>
      <Text style={styles.title}>Subsidios por Desempleo</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.text}>
          Los subsidios por desempleo son ayudas económicas destinadas a las personas que han agotado su prestación contributiva por desempleo o no tienen derecho a ella. Estas ayudas tienen como objetivo cubrir las necesidades básicas mientras el beneficiario busca empleo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Requisitos</Text>
        <Text style={styles.text}>
          - Haber agotado la prestación contributiva por desempleo (si corresponde).{"\n"}
          - No superar el umbral de renta establecido (75% del SMI).{"\n"}
          - Estar inscrito como demandante de empleo.{"\n"}
          - Cumplir condiciones específicas según el tipo de subsidio (ejemplo: mayores de 52 años, cargas familiares, etc.).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proceso de solicitud</Text>
        <Text style={styles.text}>
          - Inscribirse como demandante de empleo en el Servicio Público de Empleo Estatal (SEPE).{"\n"}
          - Presentar la solicitud de subsidio en la sede electrónica del SEPE o de forma presencial con cita previa.{"\n"}
          - Aportar la documentación requerida: DNI, justificantes de ingresos y, si corresponde, libro de familia.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Normativa</Text>
        <Text style={styles.text}>
          - Real Decreto Legislativo 8/2015, por el que se aprueba el texto refundido de la Ley General de la Seguridad Social.{"\n"}
          - Orden ESS/393/2018 que regula los procedimientos de solicitud y concesión.
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

export default SubsidiosPorDesempleo;
