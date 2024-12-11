import React from 'react';
import { View, Text, StyleSheet, ScrollView,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorAyudasDesacopladas: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const AyudasDesacopladas: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ayudas Desacopladas</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Las ayudas desacopladas son pagos directos independientes de la producción, diseñados para apoyar la renta de los agricultores mientras se promueven prácticas sostenibles.
        </Text>

        <Text style={styles.subtitle}>Tipos</Text>
        <Text style={styles.content}>
          • Ayuda Básica a la Renta para la Sostenibilidad: Pago por hectáreas elegibles.{"\n"}
          • Ayuda Redistributiva: Complemento para explotaciones pequeñas y medianas.{"\n"}
          • Ayuda a Jóvenes Agricultores: Apoyo adicional para menores de 40 años.{"\n"}
          • Ecorregímenes: Pagos por prácticas agrícolas sostenibles.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          • Ser agricultor activo.{"\n"}
          • Cumplir con la condicionalidad reforzada en normas ambientales y bienestar animal.{"\n"}
          • Disponer de derechos de ayuda asignados por hectáreas.
        </Text>
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          • Dónde: A través de las oficinas de agricultura de tu Comunidad Autónoma.{"\n"}
          • Cómo: Completa la solicitud única en la plataforma oficial del Fondo Español de Garantía Agraria (FEGA).{"\n"}
          • Plazos: Las solicitudes suelen abrirse entre febrero y mayo de cada año.
        </Text>
        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorAyudasDesacopladas')} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  card: {
    backgroundColor: '#e7f9f1',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006d77',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2a9d8f',
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    color: '#2c3e50',
    textAlign: 'justify',
    lineHeight: 24,
  },
});

export default AyudasDesacopladas;
