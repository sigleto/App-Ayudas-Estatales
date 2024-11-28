import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Definir los tipos para las rutas de navegación
type RutasNavegacion = 'PrestacionContributiva' | 'SubsidiosPorDesempleo' | 'AyudasExtraordinarias'; // Añade aquí otras rutas si las hay

// Definir el tipo para los parámetros de la pila de navegación
type RootStackParamList = {
  PrestacionContributiva: undefined;
  SubsidiosPorDesempleo: undefined;
  AyudasExtraordinarias: undefined;
  // Añade aquí otros apartados si los hay
};

// Tipo para la propiedad de navegación
type NavigationProp = StackNavigationProp<RootStackParamList>;

// Definir el tipo para los apartados
type Apartado = {
  nombre: string;
  ruta: RutasNavegacion;
};

const SubsidiosDesempleo = () => {
  const navigation = useNavigation<NavigationProp>();

  const apartados: Apartado[] = [
    { nombre: 'Prestación Contributiva', ruta: 'PrestacionContributiva' },
    { nombre: 'Subsidios por desempleo', ruta: 'SubsidiosPorDesempleo' },
    { nombre: 'AyudasExtraordinarias', ruta: 'AyudasExtraordinarias' },
    // Añade otros apartados si los hay
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Subsidios por Desempleo</Text>
      <View style={styles.list}>
        {apartados.map((apartado) => (
          <TouchableOpacity
            key={apartado.ruta}
            style={styles.item}
            onPress={() => navigation.navigate(apartado.ruta)}
          >
            <Text style={styles.itemText}>{apartado.nombre}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  list: {
    marginTop: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default SubsidiosDesempleo;