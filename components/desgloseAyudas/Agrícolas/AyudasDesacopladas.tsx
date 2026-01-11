import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  SimuladorAyudasDesacopladas: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AyudasDesacopladas: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Ayudas Desacopladas 2026</Text>

        <Text style={styles.subtitle}>Descripción</Text>
        <Text style={styles.content}>
          Las ayudas desacopladas son pagos directos que apoyan la renta de los
          agricultores y fomentan prácticas agrícolas sostenibles, adaptadas a
          los nuevos objetivos de la PAC para 2026.
        </Text>

        <Text style={styles.subtitle}>Tipos de Ayudas</Text>
        <Text style={styles.content}>
          • Ayuda Básica a la Renta para la Sostenibilidad (ABRS): Pago por
          hectáreas elegibles con nuevos criterios de sostenibilidad.{"\n"}•
          Pago Redistributivo: Apoyo reforzado para pequeñas y medianas
          explotaciones.{"\n"}• Ayuda Complementaria a Jóvenes Agricultores:
          Apoyo ampliado para agricultores menores de 40 años.{"\n"}•
          Ecorregímenes Plus: Pagos mejorados por prácticas agrícolas y
          ganaderas sostenibles y regenerativas.
        </Text>

        <Text style={styles.subtitle}>Requisitos Actualizados</Text>
        <Text style={styles.content}>
          • Cumplir con la definición revisada de agricultor activo.{"\n"}•
          Adherirse a la condicionalidad reforzada con énfasis en biodiversidad
          y cambio climático.{"\n"}• Implementar prácticas de agricultura de
          precisión y reducción de emisiones.{"\n"}• Participar en programas de
          formación continua en sostenibilidad agrícola.
        </Text>

        <Text style={styles.subtitle}>Proceso de Solicitud 2026</Text>
        <Text style={styles.content}>
          • Dónde: A través del{" "}
          <Text
            style={styles.link}
            onPress={() =>
              Linking.openURL(
                "https://sede.administracion.gob.es/PAG_Sede/HomeSede.html"
              )
            }
          >
            nuevo portal digital unificado de la PAC.
          </Text>
          {"\n"}• Cómo: Solicitud electrónica con asistencia virtual y
          verificación automática de requisitos.{"\n"}• Plazos: Solicitudes
          abiertas de enero a abril, con posibilidad de modificación hasta mayo.
        </Text>

        <Text style={styles.subtitle}>Novedades 2026</Text>
        <Text style={styles.content}>
          • Introducción de un sistema de puntos para evaluar la sostenibilidad
          de las explotaciones.{"\n"}• Bonificaciones adicionales por prácticas
          de agricultura regenerativa.{"\n"}• Integración con sistemas de
          monitoreo satelital para verificación de prácticas agrícolas.
        </Text>

        <Text style={styles.subtitle}>Simulador Actualizado</Text>
        <Text style={styles.content}>
          Descubre tu elegibilidad y estima tus ayudas con nuestro simulador
          actualizado para 2026:
        </Text>
        <Button
          title="Acceder al Simulador 2026"
          onPress={() => navigation.navigate("SimuladorAyudasDesacopladas")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  card: {
    backgroundColor: "#e7f9f1",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#006d77",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2a9d8f",
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    color: "#2c3e50",
    textAlign: "justify",
    lineHeight: 24,
  },
  link: {
    color: "#2a9d8f",
    textDecorationLine: "underline",
  },
});

export default AyudasDesacopladas;
