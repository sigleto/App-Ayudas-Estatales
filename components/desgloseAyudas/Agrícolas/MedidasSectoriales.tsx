import React from 'react';
import { View, Text, StyleSheet, ScrollView,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AnuncioInt from '@/components/Anuncios/AnuncioIntersticial';

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorMedidasSectoriales: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;


const MedidasSectoriales: React.FC = () => {
const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
        <AnuncioInt/>
      <View style={styles.card}>
        <Text style={styles.title}>Medidas Sectoriales</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Estas medidas están destinadas a apoyar sectores específicos con ayudas directas y programas sectoriales.
        </Text>

        <Text style={styles.subtitle}>Tipos</Text>
        <Text style={styles.content}>
          • Ayudas asociadas a la producción: Apoyo a sectores estratégicos como ganado vacuno o remolacha.{"\n"}
          • Ayuda específica al algodón: Pago directo al cultivo en áreas designadas.{"\n"}
          • Programas sectoriales: Financiación para proyectos en sectores como frutas, vino o aceite de oliva.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          • Estar registrado en un sector elegible.{"\n"}
          • Cumplir con las normativas específicas aplicables a cada sector.{"\n"}
          • Participar en programas operativos si corresponde.
        </Text>
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          • Dónde: A través de los registros de tu Comunidad Autónoma o de las organizaciones sectoriales correspondientes.{"\n"}
          • Cómo: Rellena el formulario de solicitud específico disponible en la web de FEGA o en las oficinas locales.{"\n"}
          • Plazos: Las fechas varían según el sector, pero se anuncian en el Boletín Oficial del Estado (BOE).
        </Text>
        <Text style={styles.subtitle}>Simulador</Text>
        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro simulador aquí:
        </Text>
        <Button 
          title="Ir al simulador" 
          onPress={() => navigation.navigate('SimuladorMedidasSectoriales')} 
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  card: {
    backgroundColor: '#fef3c7',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d97706',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#f59e0b',
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'justify',
    lineHeight: 24,
  },
});

export default MedidasSectoriales;
