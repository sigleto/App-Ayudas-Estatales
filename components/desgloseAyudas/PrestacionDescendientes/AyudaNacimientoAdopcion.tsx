import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Linking,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Definición de los tipos para las rutas
type RootStackParamList = {
  SimuladorAyudaNacimiento: undefined;
  // Agrega aquí otras rutas si las tienes
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AyudaNacimientoAdopcion = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* Título principal */}
        <Text style={styles.title}>Ayuda por Nacimiento o Adopción 2026</Text>

        {/* Sección: Descripción */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <Text style={styles.text}>
            Prestación económica en pago único por nacimiento o adopción de
            hijo, dirigida a familias numerosas, monoparentales y progenitores
            con discapacidad. Esta ayuda se mantiene vigente en 2026 dentro del
            sistema de prestaciones familiares de la Seguridad Social.
          </Text>
        </View>

        {/* Sección: Requisitos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Requisitos</Text>
          <Text style={styles.text}>
            - Residir legalmente en España.{"\n"}- No superar los límites de
            ingresos fijados anualmente en los Presupuestos Generales del Estado
            para 2026.{"\n"}- Si ambos progenitores conviven, se sumarán sus
            ingresos para calcular el límite.{"\n"}- No tener derecho a
            prestaciones equivalentes en otro régimen público.
          </Text>
        </View>

        {/* Sección: Cuantía */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cuantía</Text>
          <Text style={styles.text}>
            La cuantía continúa siendo de **1.000 euros en pago único** para
            2026, siempre que los ingresos no superen el umbral establecido en
            la normativa vigente.
          </Text>
        </View>

        {/* Sección: Proceso de Solicitud */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proceso de Solicitud</Text>
          <Text style={styles.text}>
            El trámite se realiza mediante la presentación de la{" "}
            <Text
              style={styles.link}
              onPress={() =>
                Linking.openURL(
                  "https://www.seg-social.es/wps/portal/wss/internet/Pensionistas/Servicios/34887/40968/41091/bin41083"
                )
              }
            >
              solicitud oficial del INSS
            </Text>
            , junto con la documentación acreditativa (libro de familia,
            resolución de adopción, certificado de empadronamiento, etc.).
          </Text>
        </View>

        {/* Sección: Normativa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Normativa</Text>
          <Text style={styles.text}>
            Prestación prevista en la Ley del IRPF y desarrollada por la
            normativa de la Seguridad Social. Los límites de ingresos se
            actualizan cada año a través de la Ley de Presupuestos Generales del
            Estado 2026.
          </Text>
        </View>

        <Text style={styles.content}>
          ¿Quieres saber si cumples los requisitos? Prueba el simulador:
        </Text>

        <Button
          title="Ir al simulador"
          onPress={() => navigation.navigate("SimuladorAyudaNacimiento")}
        />
      </View>
    </ScrollView>
  );
};

// Estilos
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
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1f5ef8",
    marginBottom: 8,
  },
  text: {
    fontSize: 20,
    lineHeight: 26,
    color: "#6c757d",
    textAlign: "justify",
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  content: {
    fontSize: 20,
    lineHeight: 26,
    color: "#6c757d",
    textAlign: "justify",
  },
});

export default AyudaNacimientoAdopcion;
