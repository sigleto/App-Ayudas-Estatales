import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RutasNavegacion = 'AyudaNacimientoAdopcion' | 'PrestacionHijoDiscapacidad';

type RootStackParamList = {
  AyudaNacimientoAdopcion: undefined;
  PrestacionHijoDiscapacidad: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

type Apartado = {
  nombre: string;
  ruta: RutasNavegacion;
};

const AyudaDescendientes = () => {
  const navigation = useNavigation<NavigationProp>();

  const apartados: Apartado[] = [
    { nombre: 'Ayuda general por nacimiento o adopción', ruta: 'AyudaNacimientoAdopcion' },
    { nombre: 'Prestación por hijo con discapacidad', ruta: 'PrestacionHijoDiscapacidad' },
  ];

  // Estado para controlar el efecto de animación
  const [scale] = useState(new Animated.Value(1));

  // Función para aplicar la animación
  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.05,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ayudas por descendientes</Text>
      <View style={styles.list}>
        {apartados.map((apartado) => (
          <Animated.View
            key={apartado.ruta}
            style={[styles.item, { transform: [{ scale }] }]}
          >
            <TouchableOpacity
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => navigation.navigate(apartado.ruta)}
            >
              <Text style={styles.itemText}>{apartado.nombre}</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
    textAlign: 'center',
    marginBottom: 24,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  list: {
    marginTop: 16,
  },
  item: {
    padding: 18,
    marginVertical: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default AyudaDescendientes;