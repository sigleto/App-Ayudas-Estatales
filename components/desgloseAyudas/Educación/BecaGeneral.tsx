import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const BecaGeneral: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca General</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          La Beca General está dirigida a estudiantes de enseñanzas postobligatorias: 
          bachillerato, formación profesional, enseñanzas artísticas y deportivas, 
          idiomas y universitarias.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Ser ciudadano español o tener residencia legal en España.{"\n"}
          - Estar matriculado en un curso completo o número mínimo de asignaturas.{"\n"}
          - No superar los umbrales de renta establecidos.{"\n"}
          - Alcanzar el rendimiento académico mínimo exigido.
        </Text>
        <Text style={styles.subtitle}>Cuantías</Text>
<Text style={styles.content}>
  <Text style={styles.bold}>Cantidad fija:</Text> Es un importe establecido anualmente en la convocatoria, que se otorga si se cumplen los requisitos generales, económicos y académicos. No se puede recibir junto con la beca básica si se tiene beca ligada a la renta. Los componentes de la beca fija son:
  {"\n"}{"\n"}
  - **Básica**: 300 € (350 € en FP de Grado Básico).
  {"\n"}
  - **Por renta familiar**: 1.700 €.
  {"\n"}
  - **Por cambio de residencia durante el curso**: 2.500 €.
  {"\n"}
  - **Por excelencia académica**: 50 € - 125 €.
  {"\n"}{"\n"}

  <Text style={styles.bold}>Cantidad variable:</Text> Se distribuye entre quienes ya han recibido la cantidad fija, usando una fórmula que considera la nota media y la renta familiar. El mínimo para la cantidad variable es de 60 €, si se solicita para estudios específicos como idiomas, FP de Grado Básico o acceso a la universidad para mayores de 25 años.
</Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Accede a la <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://sede.educacion.gob.es/portada.html')}>
            Sede Electrónica
          </Text> del Ministerio de Educación.{"\n"}
          2. Rellena el formulario en línea con los datos personales y académicos.{"\n"}
          3. Adjunta la documentación requerida.{"\n"}
          4. Envía la solicitud antes del 10 de mayo de 2024.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por el Real Decreto 1721/2007 y las convocatorias anuales del Ministerio 
          de Educación y Formación Profesional.
        </Text>
      </View>
    </ScrollView>
  );
};

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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f5ef8',
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: '#6c757d',
    textAlign: 'justify',
  },
  link: {
    color: '#2a9d8f',
    textDecorationLine: 'underline',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default BecaGeneral;