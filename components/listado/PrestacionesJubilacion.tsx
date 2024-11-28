import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PrestacionesJubilacion() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Prestaciones por Jubilación</Text>

      <Text style={styles.sectionTitle}>1. Jubilación Ordinaria</Text>
      <Text style={styles.content}>
        La jubilación ordinaria es la más común y está destinada a trabajadores que alcanzan la edad de jubilación legal, 
        que varía entre 65 y 67 años dependiendo de los años cotizados. Requiere al menos 15 años de cotización, 
        con 2 años dentro de los últimos 15 antes de la jubilación.
      </Text>

      <Text style={styles.sectionTitle}>2. Jubilación Anticipada</Text>
      <Text style={styles.content}>
        Permite acceder a la jubilación antes de la edad legal, bajo dos modalidades:
        {'\n'}- Voluntaria: Con coeficientes reductores en la cuantía.
        {'\n'}- Forzosa: Por causas ajenas al trabajador, como despidos colectivos o cierres de empresas.
      </Text>

      <Text style={styles.sectionTitle}>3. Jubilación Parcial</Text>
      <Text style={styles.content}>
        Posibilita trabajar parcialmente mientras se cobra una pensión proporcional. Suele estar vinculada a un contrato 
        de relevo para garantizar la continuidad laboral.
      </Text>

      <Text style={styles.sectionTitle}>4. Jubilación Activa</Text>
      <Text style={styles.content}>
        Permite compatibilizar un trabajo con la percepción de un porcentaje de la pensión de jubilación. Es una opción 
        atractiva para quienes desean mantenerse activos tras la edad de jubilación.
      </Text>

      <Text style={styles.sectionTitle}>5. Jubilación Flexible</Text>
      <Text style={styles.content}>
        Ofrece la posibilidad de reingresar al mercado laboral tras haberse jubilado, ajustando la pensión según el 
        tiempo trabajado.
      </Text>

      <Text style={styles.sectionTitle}>6. Jubilación en Regímenes Especiales</Text>
      <Text style={styles.content}>
        Aplica a trabajadores de sectores específicos como el mar, la minería o funcionarios públicos. Las condiciones 
        de acceso y cálculo de la pensión pueden variar respecto al régimen general.
      </Text>

      <Text style={styles.sectionTitle}>7. Jubilación No Contributiva</Text>
      <Text style={styles.content}>
        Dirigida a personas que no cumplen con los años mínimos de cotización. Requiere tener al menos 65 años, residir 
        en España durante 10 años y no superar los ingresos máximos establecidos.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#555',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    marginBottom: 10,
  },
});
