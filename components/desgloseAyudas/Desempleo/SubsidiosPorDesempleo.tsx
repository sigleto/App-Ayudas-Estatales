import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const SubsidiosPorDesempleo = () => {
  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#444',
  },
  text: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
});

export default SubsidiosPorDesempleo;
