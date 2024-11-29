import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const PrestacionesJubilacion = () => {
  const sections = [
    {
      title: '1. Jubilación Ordinaria',
      content: 'La jubilación ordinaria es la más común y está destinada a trabajadores que alcanzan la edad de jubilación legal, que varía entre 65 y 67 años dependiendo de los años cotizados. Requiere al menos 15 años de cotización, con 2 años dentro de los últimos 15 antes de la jubilación.'
    },
    {
      title: '2. Jubilación Anticipada',
      content: 'Permite acceder a la jubilación antes de la edad legal, bajo dos modalidades:\n- Voluntaria: Con coeficientes reductores en la cuantía.\n- Forzosa: Por causas ajenas al trabajador, como despidos colectivos o cierres de empresas.'
    },
    {
      title: '3. Jubilación Parcial',
      content: 'Posibilita trabajar parcialmente mientras se cobra una pensión proporcional. Suele estar vinculada a un contrato de relevo para garantizar la continuidad laboral.'
    },
    {
      title: '4. Jubilación Activa',
      content: 'Permite compatibilizar un trabajo con la percepción de un porcentaje de la pensión de jubilación. Es una opción atractiva para quienes desean mantenerse activos tras la edad de jubilación.'
    },
    {
      title: '5. Jubilación Flexible',
      content: 'Ofrece la posibilidad de reingresar al mercado laboral tras haberse jubilado, ajustando la pensión según el tiempo trabajado.'
    },
    {
      title: '6. Jubilación en Regímenes Especiales',
      content: 'Aplica a trabajadores de sectores específicos como el mar, la minería o funcionarios públicos. Las condiciones de acceso y cálculo de la pensión pueden variar respecto al régimen general.'
    },
    {
      title: '7. Jubilación No Contributiva',
      content: 'Dirigida a personas que no cumplen con los años mínimos de cotización. Requiere tener al menos 65 años, residir en España durante 10 años y no superar los ingresos máximos establecidos.'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Prestaciones por Jubilación</Text>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <Text style={styles.content}>{section.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  section: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 18,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});

export default PrestacionesJubilacion;