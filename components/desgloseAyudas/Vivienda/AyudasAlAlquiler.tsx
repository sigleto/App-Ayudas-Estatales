import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorAyudasAlquiler: undefined;

  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
export default function AyudasAlAlquiler() {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Título principal */}
        <Text style={styles.title}>Ayudas al Alquiler</Text>

        {/* Sección: Descripción */}
        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ayudas económicas para personas con ingresos limitados, destinadas a
          sufragar hasta el 50% del coste mensual del alquiler. Información
          vigente en 2026.
        </Text>

        {/* Sección: Requisitos */}
        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - <Text style={styles.bold}>Vivienda habitual y permanente</Text>
          {"\n\n"}- <Text style={styles.bold}>Límite de ingresos:</Text>
          {"\n"} - 3 IPREM
          {"\n"} - 4 IPREM: familia numerosa general y personas con discapacidad
          {"\n"} - 5 IPREM: familia numerosa especial y personas con
          determinados grados de discapacidad
          {"\n\n"}-{" "}
          <Text style={styles.bold}>Límite de la renta al alquiler:</Text>
          {"\n"} - Con carácter general: 600 euros/mes
          {"\n"} - 900 euros/mes en determinados ámbitos a definir por las
          comunidades autónomas
        </Text>

        {/* Sección: Cuantías */}
        <Text style={styles.subtitle}>Cuantías</Text>
        <Text style={styles.content}>
          - <Text style={styles.bold}>Con carácter general:</Text> hasta el 40%
          de la renta mensual
          {"\n"}- <Text style={styles.bold}>Mayores de 65 años:</Text> hasta el
          50% de la renta mensual
          {"\n"}-{" "}
          <Text style={styles.bold}>
            Alquiler en el tramo comprendido entre 601 y 900 euros:
          </Text>{" "}
          ayuda hasta el 30% en determinados ámbitos a definir por las
          comunidades autónomas
        </Text>

        {/* Sección: Proceso de Solicitud */}
        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          Las solicitudes deben gestionarse en las{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://www.mivau.gob.es/arquitectura-vivienda-y-suelo/politica-de-vivienda/enlaces-comunidades-autonomas-ceuta-y-melilla"
              )
            }
          >
            oficinas de vivienda
          </Text>{" "}
          de cada comunidad autónoma, adjuntando documentación personal,
          contrato de alquiler y justificantes de pago.
        </Text>

        {/* Sección: Normativa */}
        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Plan Estatal de Vivienda 2023-2026. Vigente en 2026.
        </Text>

        <Text style={styles.content}>
          ¿Quieres saber si tienes derecho al bono? Puedes probar nuestro
          simulador aquí:
        </Text>
        <Button
          title="Ir al simulador alquiler"
          onPress={() => navigation.navigate("SimuladorAyudasAlquiler")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4f8", // Fondo suave y amigable
  },
  card: {
    backgroundColor: "#f9f1b9",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2a9d8f",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1f5ef8",
    marginTop: 20,
    marginBottom: 5,
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: "#6c757d",
    textAlign: "justify",
  },
  link: {
    color: "#2a9d8f",
    textDecorationLine: "underline",
  },
  bold: {
    fontWeight: "bold",
  },
});
