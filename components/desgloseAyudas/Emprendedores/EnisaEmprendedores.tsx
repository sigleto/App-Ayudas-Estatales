import React from 'react';
import { ScrollView, View, Text, StyleSheet, Linking } from 'react-native';

const EnisaEmprendedores = () => {
  const openGuide = () => {
    Linking.openURL(
      'https://cdn.enisa.es/EcommerceProduct/A26A3E77A791B4425D993E31DF6B70B6/ATTACHMENT/EF3ED5EACB22250177894E31C245A4AE/03badae274b297612d3da5679fcdb0183b6237a5.pdf'
    );
  };

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
            - Ser una pyme, conforme a la definición de la Unión Europea.{'\n'}
            - Tener personalidad jurídica propia, como sociedad mercantil, independiente de la de los socios o partícipes de la empresa.{'\n'}
            - La sociedad deberá haber sido constituida, como máximo, durante los 24 meses anteriores a la solicitud.{'\n'}
            - Desarrollar la actividad principal y tener el domicilio social en el territorio nacional.{'\n'}
            - El modelo de negocio será innovador, novedoso o con claras ventajas competitivas.{'\n'}
            - Cofinanciar las necesidades financieras asociadas al proyecto empresarial.{'\n'}
            - Los fondos propios han de ser, como mínimo, equivalentes a la cuantía del préstamo.{'\n'}
            - El proyecto empresarial deberá mostrar una estructura financiera equilibrada y profesionalidad en la gestión, mostrando viabilidad técnica y económica.{'\n'}
            - Las cuentas del último ejercicio cerrado habrán de estar depositadas en el Registro Mercantil o en otro registro público que proceda.{'\n'}
            - Quedan excluidos los sectores inmobiliario y financiero.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            La solicitud se realiza a través de la web de ENISA, adjuntando el plan de negocio y la documentación financiera. Aquí puedes descargar{' '}
            <Text style={styles.link} onPress={openGuide}>
              la guía para la solicitud
            </Text>.
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
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default EnisaEmprendedores;

