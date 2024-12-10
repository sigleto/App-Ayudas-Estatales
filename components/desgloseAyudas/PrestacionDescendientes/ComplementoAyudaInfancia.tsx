import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorComplementoAyudaInfancia: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const  ComplementoAyudaInfancia=()=> {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Complemento de Ayuda para la Infancia</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayuda económica mensual de entre 57 y 115 euros dirigida a unidades de convivencia con menores a cargo y rentas bajas.{"\n"}
          Este complemento puede solicitarse de manera independiente al Ingreso Mínimo Vital.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Tener menores de 18 años a cargo en la unidad de convivencia.{"\n"}
          - Cumplir con los límites de renta: hasta el 300% de las rentas garantizadas por el IMV.{"\n"}
          - No superar el 150% del umbral de patrimonio del IMV.{"\n"}
          - Para familias con ingresos bajos, no es necesario recibir el IMV.{"\n"}
          - La ayuda se otorga automáticamente a los perceptores de IMV o prestaciones por hijos a cargo, si cumplen requisitos.
        </Text>

        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          Las cuantías para 2024 son las siguientes:{"\n"}
          - Menores de 3 años: 115 € al mes.{"\n"}
          - Entre 3 y 6 años: 80,50 € al mes.{"\n"}
          - Entre 6 y 18 años: 57,50 € al mes.{"\n"}
          {"\n"}Ejemplo: Una familia con un niño de 2 años y otro de 15 años recibiría 172,50 € al mes.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La ayuda puede reconocerse automáticamente en algunos casos.{"\n"}
          - **Automático**: para perceptores de IMV o prestaciones familiares, siempre que cumplan los requisitos.{"\n"}
          - **Solicitud manual**: a través de la web del INSS. Puedes iniciar la solicitud desde el siguiente enlace:{" "}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://imv.seg-social.es')}>
            Solicitar complemento ayuda infancia
          </Text>
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Regulado por la normativa del Ingreso Mínimo Vital y actualizaciones en BOE para 2024.
        </Text>

        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al complemento? Puedes probar nuestro simulador aquí:
        </Text>
        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate('SimuladorComplementoAyudaInfancia')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f8ff', // Fondo suave y amigable
  },
  card: {
    backgroundColor: '#dff6e8',
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
    color: '#054a91',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0e76a8',
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
    color: '#1b9c85',
    textDecorationLine: 'underline',
  },
});
export default ComplementoAyudaInfancia;