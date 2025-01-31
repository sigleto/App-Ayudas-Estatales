import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  SimuladorAvalHipoteca: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Aval20PorCiento() {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Aval del 20% de la Hipoteca</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Programa diseñado para facilitar el acceso a hipotecas, eliminando la necesidad de aportar el 20% del valor inicial de la vivienda. Esta iniciativa está dirigida principalmente a jóvenes menores de 35 años y familias con menores a cargo, permitiendo adquirir una vivienda sin el desembolso inicial que habitualmente se requiere.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>• Ser menor de 36 años o tener menores a cargo.</Text>
          <Text style={styles.listItem}>• Ser mayor de edad y residir legalmente en España los dos años previos.</Text>
          <Text style={styles.listItem}>• Adquirir la primera vivienda habitual y permanente en España.</Text>
          <Text style={styles.listItem}>• No destinar la vivienda a actividades económicas.</Text>
          <Text style={styles.listItem}>• No haber sido propietario de otra vivienda, salvo excepciones justificadas.</Text>
          <Text style={styles.listItem}>• No tener deudas en CIRBE (Central de Información de Riesgos).</Text>
          <Text style={styles.listItem}>• No superar 100.000 € de patrimonio neto por persona.</Text>
          <Text style={styles.listItem}>• Cumplir con los límites de precio por Comunidad Autónoma.</Text>
          <Text style={styles.listItem}>• Ingresos individuales inferiores a 37.800 € anuales (4,5 veces el IPREM).</Text>
          <Text style={styles.listItem}>• Ingresos conjuntos no superiores al doble del límite anterior si hay dos adquirentes.</Text>
        </View>

        <Text style={styles.subtitle}>Importe máximo del préstamo avalado</Text>
        <Text style={styles.content}>
          El importe del préstamo no podrá superar el menor entre:
        </Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>• 100% del valor de tasación de la vivienda.</Text>
          <Text style={styles.listItem}>• 100% del precio de adquisición (impuestos y gastos no incluidos).</Text>
        </View>
        <Text style={styles.content}>
          En caso de viviendas con calificación energética D o superior, el porcentaje mínimo será del 75%.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          Gestionar a través de las{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://www.ico.es/es/web/guest/entidades-linea-avales-hipoteca-primera-vivienda')}
          >
            entidades bancarias participantes
          </Text>
          , presentando la documentación requerida. El plazo para formalizar los préstamos finaliza el 31 de diciembre de 2025.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Programa del Ministerio de Vivienda y Agenda Urbana (MIVAU) en colaboración con el ICO.
        </Text>

        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorAvalHipoteca')} 
        />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8', // Fondo suave y amigable
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
  listContainer: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
    color: '#555',
  },
});
