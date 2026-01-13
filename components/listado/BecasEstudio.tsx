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

type RutasNavegacion = "BecaGeneral" | "BecaApoyoEducativo" | "BecaResidencia";

type RootStackParamList = {
  BecaGeneral: undefined;
  BecaApoyoEducativo: undefined;
  BecaResidencia: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

type Apartado = { nombre: string; ruta: RutasNavegacion };

const BecasEstudio = () => {
  const navigation = useNavigation<NavigationProp>();

  const apartados: Apartado[] = [
    { nombre: "Beca general para estudios", ruta: "BecaGeneral" },
    { nombre: "Beca de apoyo educativo especial", ruta: "BecaApoyoEducativo" },
    { nombre: "Beca por Residencia", ruta: "BecaResidencia" },
  ];

  const [scale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 1.05, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true }).start();
  };

  return (
    <View style={styles.container}>
      {/* Scroll para lista */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require("../../assets/images/Estudios.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Becas de Estudio</Text>

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

      {/* Banner siempre visible */}
      <View style={styles.bannerContainer}>
        <AnuncioBan />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0F8FF" },
  scrollContent: { padding: 16, paddingBottom: 16 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E3A8A",
    textAlign: "center",
    marginBottom: 24,
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
  list: { marginTop: 16 },
  item: {
    padding: 18,
    marginVertical: 10,
    backgroundColor: "#4CAF50",
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
    height: 150,
    marginTop: 55,
    marginLeft: "16%",
    marginBottom: 20,
    resizeMode: "contain",
  },
  bannerContainer: { width: "100%", padding: 10, backgroundColor: "#fff" },
});

export default BecasEstudio;
