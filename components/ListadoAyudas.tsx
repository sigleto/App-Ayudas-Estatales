import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RutasNavegacion = 'SubsidiosDesempleo' | 'PrestacionesJubilacion' | 'AyudasVivienda' | 'FamiliasNumerosas' | 'BecasEstudio' | 'Emprendedores' | 'Discapacidad';

type RootStackParamList = {
  SubsidiosDesempleo: undefined;
  PrestacionesJubilacion: undefined;
  AyudasVivienda: undefined;
  FamiliasNumerosas: undefined;
  BecasEstudio: undefined;
  Emprendedores: undefined;
  Discapacidad: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

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
    backgroundColor: '#E5F5FE',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0077B6',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  ayudas: {
    marginTop: 10,
  },
  item: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#0077B6',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    alignItems: 'center',
    transform: [{ scale: 1 }],
  },
  itemHovered: {
    transform: [{ scale: 1.03 }],
  },
  texto: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
