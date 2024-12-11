import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AnuncioInt from '@/components/Anuncios/AnuncioIntersticial';
// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorDesarrolloRural: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const MedidasDesarrolloRural: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <AnuncioInt/>
        <Text style={styles.title}>Medidas de Desarrollo Rural</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Estas medidas promueven la sostenibilidad, el emprendimiento y la mejora en áreas rurales mediante apoyos económicos.
        </Text>

        <Text style={styles.subtitle}>Tipos</Text>
        <Text style={styles.content}>
          • Compensación por limitaciones geográficas: Ayudas a explotaciones en áreas desfavorecidas.{"\n"}
          • Inversiones: Modernización y diversificación de explotaciones.{"\n"}
          • Jóvenes agricultores: Apoyo para instalación de nuevos agricultores.{"\n"}
          • Programas LEADER: Financiación de proyectos innovadores.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          • Residir o trabajar en áreas elegibles.{"\n"}
          • Presentar proyectos viables según la convocatoria.{"\n"}
          • Cumplir con normativas medioambientales y de sostenibilidad.
        </Text>
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          • Dónde: Oficinas locales de desarrollo rural o en las asociaciones LEADER.{"\n"}
          • Cómo: Rellena el formulario de ayuda específico y adjunta un plan de negocio o inversión si corresponde.{"\n"}
          • Plazos: Los períodos de solicitud varían según el tipo de ayuda, pero suelen publicarse en las webs oficiales de cada Comunidad Autónoma.
        </Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorDesarrolloRural')} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
  },
  card: {
    backgroundColor: '#e0f7fa',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796b',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#009688',
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    color: '#374151',
    textAlign: 'justify',
    lineHeight: 24,
  },
});

export default MedidasDesarrolloRural;
