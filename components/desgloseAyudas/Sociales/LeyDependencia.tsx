import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  SimuladorLeyDeDependencia: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function LeyDependencia() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ley de Dependencia</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Ley que garantiza la atención a personas en situación de dependencia,
          asegurando el acceso a servicios y prestaciones de cuidado personal.
          Se han incrementado las horas mensuales de ayuda a domicilio y se han
          mejorado las prestaciones económicas. Información vigente en 2026.
        </Text>

        <Text style={styles.subtitle}>Requisitos</Text>
        <Text style={styles.content}>
          - Estar en situación de dependencia.{"\n"}- Ser residente en España.
          {"\n"}- Cumplir con el baremo de dependencia establecido por la ley:
          {"\n"}
          {"    "}• Grado I: Dependencia moderada (25-49 puntos){"\n"}
          {"    "}• Grado II: Dependencia severa (50-74 puntos){"\n"}
          {"    "}• Grado III: Gran dependencia (75-100 puntos){"\n"}
          Aplica desde los 3 años y evalúa niveles según autonomía e intensidad
          del cuidado requerido.
        </Text>

        <Text style={styles.subtitle}>Prestaciones Económicas</Text>
        <Text style={styles.content}>
          <Text style={styles.bold}>Cuidados en el entorno familiar:</Text>
          {"\n"}
          {"    "}• Grado I: hasta 185 €/mes{"\n"}
          {"    "}• Grado II: hasta 325 €/mes{"\n"}
          {"    "}• Grado III: hasta 760 €/mes{"\n"}
          {"\n"}
          <Text style={styles.bold}>Asistencia personal:</Text>
          {"\n"}
          {"    "}• Grado I: hasta 320 €/mes{"\n"}
          {"    "}• Grados II y III: hasta 760 €/mes{"\n"}
          {"\n"}
          <Text style={styles.bold}>Servicios específicos:</Text>
          {"\n"}
          {"    "}• Grado I: hasta 320 €/mes{"\n"}
          {"    "}• Grado II: hasta 455 €/mes{"\n"}
          {"    "}• Grado III: hasta 760 €/mes
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud</Text>
        <Text style={styles.content}>
          La solicitud debe realizarse ante los servicios sociales de la
          comunidad autónoma correspondiente, donde se evaluará la situación de
          dependencia. También se puede realizar en línea.
        </Text>

        <Text style={styles.subtitle}>Normativa</Text>
        <Text style={styles.content}>
          Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal
          y Atención a las Personas en Situación de Dependencia. Actualizaciones
          recientes incluyen el Real Decreto-ley 2/2026.
        </Text>

        {/* Botón para navegar al simulador */}
        <Button
          title="Simular Ley de Dependencia"
          onPress={() => navigation.navigate("SimuladorLeyDeDependencia")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f4f8",
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
  bold: {
    fontWeight: "bold",
  },
});
