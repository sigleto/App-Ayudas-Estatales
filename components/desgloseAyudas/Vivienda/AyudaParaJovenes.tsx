import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorAyudaJovenesAlquiler: undefined;
  SimuladorAyudaJovenesAdquisicion: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function AyudasParaJovenes() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Título principal */}
        <Text style={styles.title}>Ayudas para Jóvenes</Text>

        {/* Sección: Descripción */}
        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayudas para jóvenes menores de 35 años para facilitar el disfrute de una vivienda ya sea en régimen de alquiler 
          o mediante una ayuda directa a la adquisición de viviendas localizadas en municipios de menos de 5.000 habitantes.
        </Text>

        {/* Sección: Requisitos */}
        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>Ayuda al alquiler:</Text>
          {'\n'}- Vivienda habitual y permanente
          {'\n'}- Ingresos en la unidad de convivencia inferiores a:
          {'\n'}  - 3IPREM de forma general
          {'\n'}  - 4IPREM si se trata de familias numerosas generales y personas con discapacidad
          {'\n'}  - 5IPREM familias numerosas especiales y personas con determinados grados de discapacidad
          {'\n'}- Alquiler mensual máximo de 600 euros
          {'\n'}- Alquiler mensual máximo de 900 euros en determinados ámbitos definidos por las comunidades autónomas
          
          {'\n\n'}<Text style={styles.bold}>Ayuda a la adquisición:</Text>
          {'\n'}- Vivienda habitual y permanente
          {'\n'}- Ingresos en la unidad de convivencia inferiores a:
          {'\n'}  - 3IPREM de forma general
          {'\n'}  - 4IPREM si se trata de familias numerosas generales y personas con discapacidad
          {'\n'}  - 5IPREM familias numerosas especiales y personas con determinados grados de discapacidad
          {'\n'}- Precio de adquisición inferior a 100.000€
        </Text>

        {/* Sección: Cuantías */}
        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>Ayuda al alquiler:</Text>
          {'\n'}- Hasta 50% del alquiler mensual
          {'\n'}- Hasta 30% en el tramo entre 601 y 900 euros
          
          {'\n\n'}<Text style={styles.bold}>Ayuda a la adquisición:</Text>
          {'\n'}- Hasta 10.800 euros con un límite del 20% del precio de adquisición (inferior a 100.000 euros).
        </Text>

        {/* Sección: Proceso de Solicitud */}
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          Las solicitudes deben gestionarse en las{' '}
          <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://www.mivau.gob.es/arquitectura-vivienda-y-suelo/politica-de-vivienda/enlaces-comunidades-autonomas-ceuta-y-melilla')}
          >
            oficinas de vivienda
          </Text>{' '}
          de cada comunidad autónoma, adjuntando documentación personal, fiscal y de la vivienda.
        </Text>

        {/* Sección: Normativa */}
        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Plan Estatal de Vivienda 2022-2025 (BOE-A-2021-19809).
        </Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador alquiler" 
          onPress={() => navigation.navigate('SimuladorAyudaJovenesAlquiler')} 
        />
        <Button 
          title="Ir al simulador adquisicion" 
          onPress={() => navigation.navigate('SimuladorAyudaJovenesAdquisicion')} 
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
  bold: {
    fontWeight: 'bold',
  },
});
