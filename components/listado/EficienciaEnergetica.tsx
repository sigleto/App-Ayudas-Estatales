import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import AnuncioBan from "../Anuncios/AnuncioBanner";

type RutasNavegacion = "AyudaMoves" | "AyudaRehabilitacion" | "AyudaRenovables";

type RootStackParamList = {
  AyudaMoves: undefined;
  AyudaRehabilitacion: undefined;
  AyudaRenovables: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

type Apartado = {
  nombre: string;
  ruta: RutasNavegacion;
};

const EficienciaEnergetica = () => {
  const navigation = useNavigation<NavigationProp>();

  const apartados: Apartado[] = [
    { nombre: "Ayuda Adquisición Vehiculos Eléctricos", ruta: "AyudaMoves" },
    {
      nombre: "Ayuda Rehabilitación para eficiencia energética",
      ruta: "AyudaRehabilitacion",
    },
    { nombre: "Ayuda Renovables", ruta: "AyudaRenovables" },
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
      <Image
        source={require("../../assets/images/EficienciaEnergetica.jpg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Eficiencia Energética</Text>
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
      <AnuncioBan />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1A535C",
    textAlign: "center",
    marginBottom: 24,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  list: {
    marginTop: 16,
  },
  item: {
    padding: 18,
    marginVertical: 10,
    backgroundColor: "#FF6B6B",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 8,
    alignItems: "center",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "capitalize",
  },
  logo: {
    width: "70%",
    height: "35%",
    marginTop: 55,
    marginLeft: "16%",
    marginBottom: 20,
  },
});

export default EficienciaEnergetica;
