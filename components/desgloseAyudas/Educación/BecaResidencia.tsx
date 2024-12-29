import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorBecaResidencia: undefined;
  // Agrega aquí otras rutas si las tienes
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const BecaResidencia: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Beca de Residencia 2025</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayuda destinada a sufragar los gastos de residencia de estudiantes que cursen 
          estudios lejos de su domicilio familiar.
        </Text>

        <Text style={styles.subtitle}>Requisitos y Novedades</Text>
        <Text style={styles.content}>
          - El importe máximo se mantiene en 2.500 euros{"\n"}
          - Estar matriculado en estudios postobligatorios o universitarios.{"\n"}
          - Residencia habitual alejada del centro de estudios.{"\n"}
          - Estudios presenciales y con matrícula completa{"\n"}
          - No superar el umbral de renta familiar (incrementado un 5% respecto a 2024){"\n"}
          - Nota mínima de acceso: 5 para estudios no universitarios{"\n"}
          - Para estudiantes con discapacidad: grado mínimo reducido al 25%
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          1. Rellenar la solicitud en línea en la  <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://sede.educacion.gob.es/sede/login/inicio.jjsp?idConvocatoria=2076')}>
            sede electrónica
          </Text>{"\n"}
          2. Aportar un contrato de alquiler o certificado de residencia.{"\n"}
          3. Completar antes de la fecha límite.
        </Text>

        <Text style={styles.subtitle}>Cambios Importantes</Text>
        <Text style={styles.content}>
          - Se excluyen del cómputo patrimonial los gastos de alquiler de vivienda habitual.{"\n"}
          - Reducción gradual de la cuantía variable, aumentando las cuantías fijas.{"\n"}
          - Nota de acceso a becas universitarias se reducirá gradualmente a 5.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Incluida en las disposiciones generales de las becas estatales, regulada 
          por la Orden EFP/XYZ/2025.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho a la beca? Prueba nuestro simulador actualizado:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorBecaResidencia')} 
        />
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
});

export default BecaResidencia;