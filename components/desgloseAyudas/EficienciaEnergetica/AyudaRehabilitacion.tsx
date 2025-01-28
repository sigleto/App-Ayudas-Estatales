import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  SimuladorRehabilitacion: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AyudaRehabilitacionEdificios = () => {
  const navigation = useNavigation<NavigationProp>();

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          Rehabilitación Energética de Edificios (PREE)
        </Text>
        <Text style={styles.content}>
          El Programa PREE ofrece ayudas para mejorar la eficiencia energética
          de edificios residenciales y terciarios. Estas ayudas cubren la mejora
          de la envolvente térmica, la sustitución de instalaciones térmicas y
          la renovación de sistemas de iluminación, con el objetivo de reducir
          el consumo energético y las emisiones de CO₂.
        </Text>

        <Text style={styles.subtitle}>Objetivos del Programa</Text>
        <View style={styles.listContainer}>
          {[
            "Reducir el consumo energético en edificios existentes mediante mejoras en la eficiencia.",
            "Disminuir las emisiones de gases de efecto invernadero en el sector de la construcción.",
            "Fomentar la rehabilitación de edificios para mejorar el confort y la calidad de vida de los usuarios.",
            "Promover el uso de tecnologías sostenibles y energías renovables en la edificación.",
          ].map((item, index) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>

        <Text style={styles.subtitle}>Actuaciones Subvencionables</Text>
        {[
          {
            title: "Envolvente Térmica",
            content:
              "Mejoras en fachadas, cubiertas y suelos para reducir las pérdidas de calor.",
          },
          {
            title: "Instalaciones Térmicas",
            content:
              "Sustitución de calderas, sistemas de climatización y ventilación por alternativas más eficientes.",
          },
          {
            title: "Iluminación",
            content:
              "Renovación de sistemas de iluminación por tecnologías LED y sistemas de control inteligente.",
          },
        ].map((item, index) => (
          <View key={index} style={styles.gridItem}>
            <Text style={styles.gridTitle}>{item.title}</Text>
            <Text style={styles.gridContent}>{item.content}</Text>
          </View>
        ))}

        <Text style={styles.subtitle}>Requisitos para Solicitar la Ayuda</Text>
        <View style={styles.listContainer}>
          {[
            "Los edificios deben estar construidos antes de una fecha específica (normalmente, antes de 2007).",
            "Las actuaciones deben cumplir con los criterios de eficiencia energética establecidos.",
            "Es necesario presentar un proyecto técnico y justificar la viabilidad de las mejoras.",
            "Los beneficiarios pueden ser propietarios, comunidades de vecinos o empresas.",
          ].map((item, index) => (
            <Text key={index} style={styles.listItem}>
              • {item}
            </Text>
          ))}
        </View>

        <Text style={styles.subtitle}>Más Información</Text>
        <Text style={styles.content}>
          Para conocer todos los detalles, requisitos y plazos, visita la página
          oficial del IDAE:
          <Text
            style={styles.link}
            onPress={() =>
              openLink("https://www.idae.es/ayudas-y-financiacion")
            }
          >
            {" "}
            IDAE - Ayudas y Financiación
          </Text>
        </Text>

        <Text style={styles.subtitle}>Simulador de Ayudas</Text>
        <Text style={styles.content}>
          ¿Quieres saber si cumples los requisitos y cuánto podrías ahorrar?
          Prueba nuestro simulador:
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SimuladorRehabilitacion")}
        >
          <Text style={styles.buttonText}>Ir al Simulador</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  content: { fontSize: 16, marginBottom: 15, textAlign: "justify" },
  image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 15 },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  listContainer: { marginBottom: 15 },
  listItem: { fontSize: 16, marginBottom: 5 },
  gridItem: {
    backgroundColor: "#f7f7f7",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  gridTitle: { fontSize: 16, fontWeight: "bold" },
  gridContent: { fontSize: 14 },
  link: { color: "blue", textDecorationLine: "underline" },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});

export default AyudaRehabilitacionEdificios;
