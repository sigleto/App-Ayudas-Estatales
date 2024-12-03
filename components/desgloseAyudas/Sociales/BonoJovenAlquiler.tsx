import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorBonoJoven: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function BonoJovenAlquiler() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Bono Alquiler Joven</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayuda destinada a facilitar el acceso a la vivienda para jóvenes, cubriendo una parte del alquiler de la vivienda durante un período determinado.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Tener entre 18 y 35 años.{"\n"}
          - Acreditar rentas de trabajo.{"\n"}
          - Que tus ingresos anuales sean, con carácter general, inferiores a 3 veces el IPREM.{"\n"}
          - La renta mensual vivienda debe ser como máximo de hasta 600€/mes, hasta 300€/mes si el alquiler es de una habitación
            o hasta 900€/mes o 450€/mes en alquiler de habitación, previo acuerdo de la Comisión de Seguimiento.
        </Text>

        <Text style={styles.subtitle}>Cuantías y plazos</Text>
        <Text style={styles.content}>        
          La cuantía es de 250€ al mes, se concede por 2 años por un máximo total de 6000€ a razón de 250€/mes.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          Al ser una ayuda concertada con las distintas Comunidades Autónomas, se debe presentar en las sedes de la Consejería de vivienda correspondiente a tu comunidad.{"\n"}
          Si deseas presentarla de forma online, puedes usar este{' '}
          <Text 
            style={styles.link} 
            onPress={() => Linking.openURL('https://www.mivau.gob.es/vivienda/bono-alquiler-joven')}>
            enlace
          </Text>.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          El bono joven está regulado por el Real Decreto 42/2021, de 15 de febrero, de ayudas al alquiler.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorBonoJoven')} 
        />
      </View>
    </ScrollView>
  );
}

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
