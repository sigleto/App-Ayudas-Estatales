import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definición de los tipos para las rutas de navegación
type RutasNavegacion = 'SubsidiosDesempleo' | 'PrestacionesJubilacion' | 'AyudasVivienda' | 'FamiliasNumerosas' | 'BecasEstudio' | 'Emprendedores' | 'Discapacidad';

// Definición del tipo para los parámetros de la pila de navegación
type RootStackParamList = {
  SubsidiosDesempleo: undefined;
  PrestacionesJubilacion: undefined;
  AyudasVivienda: undefined;
  FamiliasNumerosas: undefined;
  BecasEstudio: undefined;
  Emprendedores: undefined;
  Discapacidad: undefined;
};

// Tipo para la propiedad de navegación
type NavigationProp = StackNavigationProp<RootStackParamList>;

// Array de ayudas con tipos explícitos
const ayudas: { id: number; nombre: string; ruta: RutasNavegacion }[] = [
  { id: 1, nombre: 'Subsidios por desempleo', ruta: 'SubsidiosDesempleo' },
  { id: 2, nombre: 'Prestaciones por jubilación', ruta: 'PrestacionesJubilacion' },
  { id: 3, nombre: 'Ayudas para vivienda', ruta: 'AyudasVivienda' },
  { id: 4, nombre: 'Apoyo a familias numerosas', ruta: 'FamiliasNumerosas' },
  { id: 5, nombre: 'Becas y ayudas al estudio', ruta: 'BecasEstudio' },
  { id: 6, nombre: 'Ayudas para emprendedores', ruta: 'Emprendedores' },
  { id: 7, nombre: 'Ayudas para la discapacidad', ruta: 'Discapacidad' },
];

export default function ListadoAyudas() {
  const navigation = useNavigation<NavigationProp>();

  const navigateToAyuda = (ruta: RutasNavegacion) => {
    navigation.navigate(ruta);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>¿En qué ayuda estás interesado?</Text>
      
      <View style={styles.ayudas}>
        {ayudas.map((ayuda) => (
          <TouchableOpacity
            key={ayuda.id}
            style={styles.item}
            onPress={() => navigateToAyuda(ayuda.ruta)}
          >
            <Text style={styles.texto}>{ayuda.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  ayudas: {
    marginTop: 10,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  texto: {
    fontSize: 18,
    color: '#333',
  },
});
